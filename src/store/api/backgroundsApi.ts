import { baseApi } from './baseApi'
import backgroundsData from '../../database/backgrounds.json'
import avatarImage from '../../assets/avatar_default.png'
import avatar1Image from '../../assets/avatar_new.png'
import { Background } from '../../types/background'

export interface GenerateBackgroundResponse {
  id: number
  status: 'generating' | 'ready'
}

// Constants
const API_DELAY_MS = 300
const GENERATION_DURATION_MS = 5000

// Map of image names to actual imports
const imageMap: Record<string, string> = {
  'avatar_default.png': avatarImage,
  'avatar_new.png': avatar1Image,
}

// Helper function to resolve image path
const resolveImagePath = (filename: string | undefined): string | undefined => {
  if (!filename) return undefined
  return imageMap[filename] || filename
}

// Initial backgrounds from JSON
let initialBackgrounds: Background[] = (backgroundsData as Background[]).map(
  bg => ({
    ...bg,
    url: resolveImagePath(bg.url),
  })
)

// Store generating backgrounds with their start time
const generatingBackgrounds = new Map<number, { startTime: number }>()

// Get current backgrounds list with updated progress
const getCurrentBackgrounds = (): Background[] => {
  const now = Date.now()
  const backgrounds: Background[] = []
  const completedBackgrounds: Background[] = []

  // Add generating backgrounds with calculated progress
  generatingBackgrounds.forEach((data, id) => {
    const elapsed = now - data.startTime
    const progress = Math.min(
      Math.floor((elapsed / GENERATION_DURATION_MS) * 100),
      100
    )

    if (progress >= 100) {
      // Generation complete - create completed background
      const completedBackground: Background = {
        id,
        url: imageMap['avatar_new.png'],
        isDefault: false,
      }
      completedBackgrounds.push(completedBackground)
    } else {
      // Still generating
      const secondsLeft = Math.ceil((GENERATION_DURATION_MS - elapsed) / 1000)
      backgrounds.push({
        id,
        progress,
        timeLeft: `${secondsLeft} ${secondsLeft === 1 ? 'second' : 'seconds'} left`,
      })
    }
  })

  // Move completed backgrounds to permanent storage
  if (completedBackgrounds.length > 0) {
    completedBackgrounds.forEach(bg => {
      generatingBackgrounds.delete(bg.id)
      // Add to permanent storage only once
      if (!initialBackgrounds.some(existing => existing.id === bg.id)) {
        initialBackgrounds = [bg, ...initialBackgrounds]
      }
    })
  }

  // Add completed backgrounds (they're now in initialBackgrounds)
  backgrounds.push(...initialBackgrounds)

  return backgrounds
}

export const backgroundsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    // Get all backgrounds
    getBackgrounds: builder.query<Background[], void>({
      queryFn: async () => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, API_DELAY_MS))
        return { data: getCurrentBackgrounds() }
      },
      providesTags: ['Background'],
    }),

    // Generate new background (mock)
    generateBackground: builder.mutation<GenerateBackgroundResponse, void>({
      queryFn: async () => {
        // Create new background ID
        const existingIds = Array.from(generatingBackgrounds.keys())
        const initialIds = initialBackgrounds.map(bg => bg.id)
        const allIds = [...existingIds, ...initialIds]
        const newId = allIds.length > 0 ? Math.max(...allIds) + 1 : 1

        // Store generation start time
        generatingBackgrounds.set(newId, {
          startTime: Date.now(),
        })

        return {
          data: {
            id: newId,
            status: 'generating',
          },
        }
      },
      invalidatesTags: ['Background'],
    }),
  }),
})

export const { useGetBackgroundsQuery, useGenerateBackgroundMutation } =
  backgroundsApi

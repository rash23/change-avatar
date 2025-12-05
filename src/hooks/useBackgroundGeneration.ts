import { useState } from 'react'
import { useGenerateBackgroundMutation } from '@/store/api'
import { DEFAULT_IDEA_PROMPT, GENERATION_DURATION } from '@/constants'

interface UseBackgroundGenerationReturn {
  currentIdea: string
  setCurrentIdea: (idea: string) => void
  isGenerating: boolean
  handleGenerate: () => Promise<void>
  handleRegenerate: () => void
  handlePrevious: () => void
  handleNext: () => void
}

export const useBackgroundGeneration = (): UseBackgroundGenerationReturn => {
  const [currentIdea, setCurrentIdea] = useState<string>(DEFAULT_IDEA_PROMPT)
  const [isGenerating, setIsGenerating] = useState<boolean>(false)
  const [generateBackground] = useGenerateBackgroundMutation()

  const handleGenerate = async (): Promise<void> => {
    if (isGenerating) return // Prevent multiple clicks

    try {
      setIsGenerating(true)
      await generateBackground()

      // Keep loading state for generation duration
      setTimeout(() => {
        setIsGenerating(false)
      }, GENERATION_DURATION)
    } catch (error) {
      setIsGenerating(false)
      console.error('Failed to generate background:', error)
    }
  }

  // TODO: Implement regenerate functionality - should use same prompt with different seed
  const handleRegenerate = (): void => {
    // Placeholder for future implementation
  }

  // TODO: Implement navigation through previous ideas/prompts history
  const handlePrevious = (): void => {
    // Placeholder for future implementation
  }

  // TODO: Implement navigation through next ideas/prompts history
  const handleNext = (): void => {
    // Placeholder for future implementation
  }

  return {
    currentIdea,
    setCurrentIdea,
    isGenerating,
    handleGenerate,
    handleRegenerate,
    handlePrevious,
    handleNext,
  }
}

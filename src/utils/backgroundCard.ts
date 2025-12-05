import { cn } from '@/lib/utils'

export const isCardGenerating = (progress?: number): boolean => {
  return progress !== undefined && progress < 100
}

export const hasCardImage = (url?: string, progress?: number): boolean => {
  const generating = isCardGenerating(progress)
  return Boolean(url && !generating)
}

export const getCardClassName = (isDefault?: boolean): string => {
  return cn(
    'group relative cursor-pointer h-card w-card overflow-hidden rounded-xl bg-muted transition-all duration-300 hover:scale-105 hover:z-10',
    isDefault ? 'border-2 border-primary' : 'border-0'
  )
}

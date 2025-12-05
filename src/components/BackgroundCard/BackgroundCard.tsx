import type { MouseEvent } from 'react'
import { ThumbsUp, ThumbsDown } from 'lucide-react'
import BackgroundImage from './BackgroundImage'
import GeneratingOverlay from './GeneratingOverlay'
import DefaultBadge from './DefaultBadge'
import { isCardGenerating, hasCardImage, getCardClassName } from '@/utils'

interface BackgroundCardProps {
  url?: string
  progress?: number
  timeLeft?: string
  isDefault?: boolean
  onClick?: () => void
}

const BackgroundCard = ({
  url,
  progress,
  timeLeft,
  isDefault,
  onClick,
}: BackgroundCardProps) => {
  const isGenerating = isCardGenerating(progress)
  const hasImage = hasCardImage(url, progress)

  const handleLike = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    // TODO: Implement like functionality
  }

  const handleDislike = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    // TODO: Implement dislike functionality
  }

  return (
    <div onClick={onClick} className={getCardClassName(isDefault)}>
      {hasImage && <BackgroundImage url={url} />}
      {isGenerating && (
        <GeneratingOverlay progress={progress || 0} timeLeft={timeLeft} />
      )}
      {isDefault && <DefaultBadge />}

      {/* Action buttons - show on hover on desktop, always visible on mobile */}
      {hasImage && !isGenerating && (
        <div className="absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1.5 opacity-100 transition-opacity duration-300 sm:bottom-2 sm:gap-2 sm:opacity-0 sm:group-hover:opacity-100">
          <button
            onClick={handleLike}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-black/50 shadow-lg backdrop-blur-[10px] transition-all hover:scale-110 hover:bg-black/60 sm:h-10 sm:w-10 sm:rounded-xl"
            aria-label="Like"
          >
            <ThumbsUp className="h-4 w-4 text-white sm:h-5 sm:w-5" strokeWidth={2.5} />
          </button>
          <button
            onClick={handleDislike}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-black/50 shadow-lg backdrop-blur-[10px] transition-all hover:scale-110 hover:bg-black/60 sm:h-10 sm:w-10 sm:rounded-xl"
            aria-label="Dislike"
          >
            <ThumbsDown className="h-4 w-4 text-white sm:h-5 sm:w-5" strokeWidth={2.5} />
          </button>
        </div>
      )}
    </div>
  )
}

export default BackgroundCard

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

      {/* Action buttons - show on hover */}
      {hasImage && !isGenerating && (
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            onClick={handleLike}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-black/50 shadow-lg backdrop-blur-[10px] transition-all hover:scale-110 hover:bg-black/60"
            aria-label="Like"
          >
            <ThumbsUp className="h-5 w-5 text-white" strokeWidth={2.5} />
          </button>
          <button
            onClick={handleDislike}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-black/50 shadow-lg backdrop-blur-[10px] transition-all hover:scale-110 hover:bg-black/60"
            aria-label="Dislike"
          >
            <ThumbsDown className="h-5 w-5 text-white" strokeWidth={2.5} />
          </button>
        </div>
      )}
    </div>
  )
}

export default BackgroundCard

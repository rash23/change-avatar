import BackgroundCard from '../BackgroundCard'
import type { Background } from '@/types'

interface BackgroundsGridProps {
  backgrounds: Background[]
  isLoading: boolean
  onBackgroundClick: (id: number) => void
}

const BackgroundsGrid = ({
  backgrounds,
  isLoading,
  onBackgroundClick,
}: BackgroundsGridProps) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <span className="text-sm text-muted-foreground">
          Loading backgrounds...
        </span>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-2 px-1">
      {backgrounds.map(bg => (
        <BackgroundCard
          key={bg.id}
          url={bg.url}
          progress={bg.progress}
          timeLeft={bg.timeLeft}
          isDefault={bg.isDefault}
          onClick={() => onBackgroundClick(bg.id)}
        />
      ))}
    </div>
  )
}

export default BackgroundsGrid

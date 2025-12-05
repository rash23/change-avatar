import { Button } from '../ui/button'
import { Undo2, Redo2 } from 'lucide-react'
import RegenerateIcon from '../icons/RegenerateIcon'

interface IdeaControlsProps {
  onRegenerate: () => void
  onPrevious: () => void
  onNext: () => void
}

const IdeaControls = ({
  onRegenerate,
  onPrevious,
  onNext,
}: IdeaControlsProps) => {
  return (
    <div className="flex items-center justify-between">
      <Button
        variant="ghost"
        size="sm"
        onClick={onRegenerate}
        className="flex h-8 items-center gap-2 p-2 text-green-600 hover:bg-green-50 hover:text-green-700"
      >
        <RegenerateIcon />
        <span className="text-xs font-semibold leading-[120%] text-black">
          Regenerate
        </span>
      </Button>

      <div className="flex gap-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrevious}
          className="h-8 w-8 rounded-full"
        >
          <Undo2 className="h-4 w-4 text-text-secondary" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          className="h-8 w-8 rounded-full"
        >
          <Redo2 className="h-4 w-4 text-text-secondary" />
        </Button>
      </div>
    </div>
  )
}

export default IdeaControls

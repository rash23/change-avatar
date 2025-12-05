import { Textarea } from '../ui/textarea'
import IdeaControls from './IdeaControls'
import { IDEA_MAX_LENGTH } from '@/constants'

interface BackgroundIdeaSectionProps {
  value: string
  onChange: (value: string) => void
  onRegenerate: () => void
  onPrevious: () => void
  onNext: () => void
}

const BackgroundIdeaSection = ({
  value,
  onChange,
  onRegenerate,
  onPrevious,
  onNext,
}: BackgroundIdeaSectionProps) => {
  return (
    <div className="space-y-2 sm:space-y-3">
      <h3 className="text-sm font-semibold leading-[120%] text-black">
        Background idea
      </h3>
      <div className="flex h-40 flex-col rounded-xl border border-border-light p-3 sm:h-idea-section sm:p-4">
        <Textarea
          value={value}
          placeholder="Enter your background idea"
          maxLength={IDEA_MAX_LENGTH}
          onChange={e => onChange(e.target.value)}
          className="w-full flex-1 resize-none overflow-y-auto border-0 p-0 text-sm leading-relaxed focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <IdeaControls
          onRegenerate={onRegenerate}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </div>
  )
}

export default BackgroundIdeaSection

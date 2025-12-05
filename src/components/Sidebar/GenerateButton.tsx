import { Button } from '../ui/button'
import SparklesIcon from '../icons/SparklesIcon'
import { GENERATION_BUTTON_TEXT } from '@/constants'

interface GenerateButtonProps {
  onClick: () => void
  disabled?: boolean
  isGenerating?: boolean
}

const GenerateButton = ({
  onClick,
  disabled,
  isGenerating,
}: GenerateButtonProps) => {
  const buttonText = isGenerating
    ? GENERATION_BUTTON_TEXT.generating
    : GENERATION_BUTTON_TEXT.idle

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-black px-5 hover:bg-black/90 disabled:cursor-not-allowed disabled:opacity-50 sm:h-12 sm:px-7"
    >
      <SparklesIcon />
      <span className="text-sm font-semibold leading-[80%] text-white">
        {buttonText}
      </span>
    </Button>
  )
}

export default GenerateButton

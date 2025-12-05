import ProgressCircle from './ProgressCircle'

interface GeneratingOverlayProps {
  progress: number
  timeLeft?: string
}

const GeneratingOverlay = ({ progress, timeLeft }: GeneratingOverlayProps) => {
  return (
    <div className="absolute inset-0 bg-black/80">
      <div className="absolute inset-0 flex items-center justify-center">
        <ProgressCircle progress={progress} />
      </div>
      {timeLeft && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center sm:bottom-4">
          <p className="text-[10px] text-white sm:text-xs">{timeLeft}</p>
        </div>
      )}
    </div>
  )
}

export default GeneratingOverlay

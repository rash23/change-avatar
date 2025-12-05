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
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <p className="text-xs text-white">{timeLeft}</p>
        </div>
      )}
    </div>
  )
}

export default GeneratingOverlay

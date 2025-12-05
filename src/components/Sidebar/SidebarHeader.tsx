import { Button } from '../ui/button'
import { X } from 'lucide-react'

interface SidebarHeaderProps {
  onClose: () => void
}

const SidebarHeader = ({ onClose }: SidebarHeaderProps) => {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-[22px] font-bold text-black">Change background</h2>
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="h-8 w-8 rounded-full"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default SidebarHeader

import { Button } from '../ui/button'
import { X } from 'lucide-react'

interface SidebarHeaderProps {
  onClose: () => void
}

const SidebarHeader = ({ onClose }: SidebarHeaderProps) => {
  return (
    <div className="mb-4 flex items-center justify-between sm:mb-6">
      <h2 className="text-lg font-bold text-black sm:text-[22px]">Change background</h2>
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

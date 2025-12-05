import { Sheet, SheetContent } from '../ui/sheet'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { closeSidebar } from '@/store/slices/sidebarSlice'
import { useGetBackgroundsQuery } from '@/store/api'
import { useBackgroundGeneration } from '@/hooks'
import { POLLING_INTERVAL } from '@/constants'
import SidebarHeader from './SidebarHeader'
import BackgroundIdeaSection from './BackgroundIdeaSection'
import GenerateButton from './GenerateButton'
import BackgroundsGrid from './BackgroundsGrid'

const Sidebar = () => {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(state => state.sidebar.isOpen)

  const { data: backgrounds = [], isLoading } = useGetBackgroundsQuery(
    undefined,
    {
      pollingInterval: isOpen ? POLLING_INTERVAL : 0,
    }
  )

  const {
    currentIdea,
    setCurrentIdea,
    isGenerating,
    handleGenerate,
    handleRegenerate,
    handlePrevious,
    handleNext,
  } = useBackgroundGeneration()

  const handleClose = () => {
    dispatch(closeSidebar())
  }

  // TODO: Implement background selection - should apply selected background to avatar
  const handleBackgroundClick = (id: number) => {
    // Placeholder for future implementation
    // Will need to update avatar background with selected image
    void id // Suppress unused variable warning
  }

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      {isOpen && (
        <SheetContent
          side="right"
          className="flex w-full flex-col p-0 px-5 py-8 sm:max-w-[400px]"
        >
          <SidebarHeader onClose={handleClose} />

          <div className="flex-1 space-y-6 overflow-y-auto">
            <BackgroundIdeaSection
              value={currentIdea}
              onChange={setCurrentIdea}
              onRegenerate={handleRegenerate}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />

            <GenerateButton
              onClick={handleGenerate}
              disabled={isGenerating || isLoading}
              isGenerating={isGenerating}
            />

            <div className="space-y-3">
              <h3 className="text-sm font-semibold leading-[120%] text-black">
                Your backgrounds
              </h3>
              <BackgroundsGrid
                backgrounds={backgrounds}
                isLoading={isLoading}
                onBackgroundClick={handleBackgroundClick}
              />
            </div>
          </div>
        </SheetContent>
      )}
    </Sheet>
  )
}

export default Sidebar

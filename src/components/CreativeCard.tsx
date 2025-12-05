import avatarImage from '../assets/avatar_default.png'
import { useAppDispatch } from '@/store/hooks'
import { openSidebar } from '@/store/slices/sidebarSlice'
import ChangeBackgroundIcon from './icons/ChangeBackgroundIcon'

const CreativeCard = () => {
  const dispatch = useAppDispatch()

  const handleChangeBackground = () => {
    dispatch(openSidebar())
  }

  return (
    <div className="relative inline-block w-full max-w-md sm:w-auto">
      <div className="relative rounded-2xl bg-white p-2 shadow-lg">
        <button
          onClick={handleChangeBackground}
          className="absolute left-1/2 top-3 z-10 inline-flex h-[30px] w-[140px] -translate-x-1/2 items-center justify-center gap-1 overflow-hidden rounded-[10px] bg-black/20 px-2 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] transition-colors hover:bg-black/30 sm:top-4 sm:h-[34px] sm:w-button-change-bg sm:gap-1.5"
        >
          <ChangeBackgroundIcon />
          <span className="translate-y-[1px] text-[11px] font-semibold leading-none text-white sm:translate-y-[2px] sm:text-xs">
            Change background
          </span>
        </button>

        <img
          src={avatarImage}
          alt="Avatar"
          className="h-auto w-full rounded-xl"
        />
      </div>
    </div>
  )
}

export default CreativeCard

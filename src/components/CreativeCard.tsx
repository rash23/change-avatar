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
    <div className="relative inline-block">
      <div className="relative rounded-2xl bg-white p-2 shadow-lg">
        <button
          onClick={handleChangeBackground}
          className="absolute left-1/2 top-4 z-10 inline-flex h-[34px] w-button-change-bg -translate-x-1/2 items-center justify-center gap-1.5 overflow-hidden rounded-[10px] bg-black/20 px-2 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] transition-colors hover:bg-black/30"
        >
          <ChangeBackgroundIcon />
          <span className="translate-y-[2px] text-xs font-semibold leading-none text-white">
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

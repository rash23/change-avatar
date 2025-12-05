const DefaultBadge = () => {
  return (
    <div className="absolute left-1.5 top-1.5 z-10 sm:left-2 sm:top-2">
      <div className="flex h-[16px] w-[44px] items-center justify-center rounded-[5px] border border-black/5 bg-white/90 sm:h-[18px] sm:w-badge">
        <span className="translate-y-[1.5px] text-center text-[9px] font-bold uppercase leading-none text-text-primary sm:translate-y-[2px] sm:text-[10px]">
          Default
        </span>
      </div>
    </div>
  )
}

export default DefaultBadge

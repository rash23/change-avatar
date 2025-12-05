const DefaultBadge = () => {
  return (
    <div className="absolute left-2 top-2 z-10">
      <div className="flex h-[18px] w-badge items-center justify-center rounded-[5px] border border-black/5 bg-white/90">
        <span className="translate-y-[2px] text-center text-[10px] font-bold uppercase leading-none text-text-primary">
          Default
        </span>
      </div>
    </div>
  )
}

export default DefaultBadge

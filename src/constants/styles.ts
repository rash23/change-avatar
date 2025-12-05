export const BUTTON_STYLES = {
  base: 'transition-colors',
  roundedFull: 'rounded-full',
  sizes: {
    icon: 'h-8 w-8',
    sm: 'h-8 px-2 py-1.5',
    md: 'h-12 px-7',
  },
} as const

export const CARD_STYLES = {
  base: 'rounded-xl border',
  shadow: 'shadow-sm hover:shadow-md transition-shadow',
} as const

export const TEXT_STYLES = {
  heading: {
    lg: 'text-[22px] font-bold',
    md: 'text-sm font-semibold leading-[120%]',
    sm: 'text-xs font-semibold',
  },
  body: {
    sm: 'text-xs',
    md: 'text-sm',
  },
} as const

export const LAYOUT_STYLES = {
  flexCenter: 'flex items-center justify-center',
  flexBetween: 'flex items-center justify-between',
  absoluteCenter: 'absolute inset-0 flex items-center justify-center',
} as const

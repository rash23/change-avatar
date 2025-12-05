interface BackgroundImageProps {
  url?: string
}

const BackgroundImage = ({ url }: BackgroundImageProps) => {
  return (
    <img src={url} alt="Background" className="h-full w-full object-cover" />
  )
}

export default BackgroundImage

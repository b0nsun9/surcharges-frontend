interface NotExtractedFromImageProps {
  isExtracted: boolean
}

export function NotExtractedFromImage(props: NotExtractedFromImageProps) {

  if (props.isExtracted) {
    return null
  }

  return (
    <p className='text-red-500 text-center'>
      Unfortunately, it seems that the amounts from the image you provided were not recognised.<br />
      Please input both types of amounts manually.
    </p>
  )
}
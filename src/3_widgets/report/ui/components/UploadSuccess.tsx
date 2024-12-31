import { Button } from '@mui/material'
import Confetti from 'react-confetti'

interface UploadSuccessProps {
  isUploaded: boolean
  placeName: string
  goBack: () => void
}

export function UploadSuccess(props: UploadSuccessProps) {

  if (!props.isUploaded) {
    return null
  }

  return (
    <div className="fixed flex-col inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 gap-4">
      <p className='text-3xl text-white text-center'>Thank you for your contribution to</p>
      <p className='text-4xl font-bold text-white text-center'>{props.placeName}</p>
      <Button variant='contained' onClick={props.goBack}>Back to place</Button>
      <Confetti />
    </div>
  )
}
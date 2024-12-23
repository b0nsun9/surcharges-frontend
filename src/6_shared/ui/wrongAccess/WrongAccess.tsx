import { Link } from "react-router-dom"

export function WrongAccess() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <p className='text-6xl mb-14'>Wrong Access👀</p>
      <Link to='/' className='text-6xl font-bold cursor-pointer underline'>Back to search</Link>
    </div>
  )
}
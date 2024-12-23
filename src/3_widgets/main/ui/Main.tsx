import { SearchBox } from '@features/searchBox'
import { Footer } from '@shared/ui'

export function Main() {
  return (
    <div className='flex flex-col items-center justify-center h-dvh'>
      <div className='flex flex-col items-center justify-center w-full'>
        <p className='font-bold text-black sm:text-6xl text-5xl'>Surcharges</p>
      </div>
      <div className='mt-10 sm:w-1/4 w-4/5'>
        <SearchBox text='' replace={false} />
      </div>
      <Footer />
    </div>
  )
}
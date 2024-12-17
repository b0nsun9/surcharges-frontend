import { SearchBox } from '@features/searchBox'
import { Footer } from '@shared/ui'

export function Main() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex flex-col items-center justify-center'>
        <div className='mb-10'>
          <p className='font-bold text-black text-6xl'>Surcharges</p>
        </div>
        <div className='mb-10'>
          <SearchBox text='' replace={false} />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
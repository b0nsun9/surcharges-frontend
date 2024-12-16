/* frameworks */
import { useNavigate } from 'react-router-dom'

/* components */
import { SearchBox, Footer } from '@shared/ui'

import { useSearchStore } from '@shared/model/SearchStore/SearchStore'

/* usecases */

export function Search() {

  const navigate = useNavigate()

  const { searchText, setSearchText } = useSearchStore()

  const handleOnChange = (text: string) => {
    setSearchText(text)
  }
  const handleOnSubmit = () => {
    if (searchText) {
      navigate('/results')
    }
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex flex-col items-center justify-center'>
        <div className='mb-10'>
          <p className='font-bold text-black text-6xl'>Surcharges</p>
        </div>
        <div className='mb-10'>
          <SearchBox
            value={searchText}
            onChange={handleOnChange}
            onSubmit={handleOnSubmit}
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
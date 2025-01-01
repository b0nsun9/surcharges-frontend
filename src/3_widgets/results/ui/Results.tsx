import { Link, useNavigate, useParams } from 'react-router-dom'

import { SearchBox } from '@features/searchBox'
import { Footer } from '@shared/ui'

import { usePlaceListViewModel } from '../model/usePlaceListViewModel'
import PlacesList from './placelist/PlaceList'

export function Results() {

  const { text } = useParams() as { text: string }

  const navigate = useNavigate()

  // const handleLoadMore = () => {
  // refetch()
  // }

  const handleSelectedPlace = (id: string) => {
    navigate(`/place/${id}`)
  }

  const viewModel = usePlaceListViewModel(text)

  return (
    <div>
      <div className='flex lg:flex-row flex-col items-center justify-center mt-10 w-full'>
        <Link to='/' className='lg:mr-10 font-bold text-black text-5xl cursor-pointer'>Surcharges</Link>
        <div className='lg:w-1/4 w-4/5 lg:mt-0 mt-10'>
          <SearchBox text={text} replace={true} />
        </div>
      </div>
      <div>
        {
          (viewModel.isFetching && viewModel.places?.length === 0)
            ? <p>Loading</p>
            : <PlacesList
              places={viewModel.places ?? []}
              selectedPlace={handleSelectedPlace}
            />
        }
      </div>
      <div>
        {
          // data && data.nextPageToken
          //   ? <button
          //     onClick={() =>
          //       handleLoadMore()
          //     }
          //   >Load more
          //   </button>
          //   : null
        }
      </div>
      <Footer />
    </div>
  )
}

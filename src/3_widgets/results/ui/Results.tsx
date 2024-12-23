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
      <div className='flex items-center justify-center mt-10'>
        <Link to='/' className='mr-10 font-bold text-black text-3xl cursor-pointer'>Surcharges</Link>
        <SearchBox text={text} replace={true} />
      </div>
      <div>
        {
          (viewModel.isFetching && viewModel.convertPlaces.places?.length === 0)
            ? <p>Loading</p>
            : <PlacesList
              places={viewModel.convertPlaces.places ?? []}
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
      <div>
        <Footer />
      </div>
    </div>
  )
}

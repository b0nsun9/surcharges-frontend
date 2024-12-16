/* styles */
import styles from './Results.module.css'

/* frameworks */
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

/* components */
import { SearchBox, Footer } from '@shared/ui'
import PlacesList from './placelist/PlaceList'

/* usecases */
import { SearchPlaces } from '@shared/api'
import { useSearchStore } from '@shared/model/SearchStore/SearchStore'

export function Results() {

  const navigate = useNavigate()

  const { searchText, setSearchText } = useSearchStore()
  const { places, setPlaces } = useSearchStore()
  const { flushData, reset } = useSearchStore()

  const { data, isFetching, refetch } = useQuery({
    queryKey: 'places',
    retry: false,
    queryFn: () => SearchPlaces(searchText),
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setPlaces(data && data.places)
    }
  })

  const handleOnChange = (text: string) => {
    setSearchText(text)
  }

  const handleOnSubmit = () => {
    
    flushData()

    if (searchText) {
      refetch()
    }
  }

  const handleLoadMore = () => {
    refetch()
  }

  const handleBackToSearch = () => {
    reset()
  }

  const handleSelectedPlace = (id: string) => {
    navigate(`/place/${id}`)
  }

  return (
    <div>
      <div className={styles.headerContainer}>
        <Link
          to='/'
          className={styles['service-title']}
          onClick={handleBackToSearch}
        >Surcharges</Link>
        <SearchBox
          value={searchText}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        />
      </div>
      <div>
        {
          isFetching
            ? <p className={styles.loading}>Loading</p>
            : <PlacesList
              places={places}
              selectedPlace={handleSelectedPlace}
            />
        }
      </div>
      <div>
        {
          data && data.nextPageToken
            ? <button
              className={styles.button}
              onClick={() =>
                handleLoadMore()
              }
            >Load more
            </button>
            : null
        }
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

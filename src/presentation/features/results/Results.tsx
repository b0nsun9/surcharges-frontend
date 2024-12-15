/* styles */
import styles from './Results.module.css'

/* frameworks */
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'

/* components */
import SearchBox from '@components/searchBox/SearchBox'
import PlacesList from '@components/placeList/PlaceList'
import Footer from '@components/footer/Footer'

/* usecases */
import SearchPlaces from '@usecases/SearchPlaces'

import { useSearchStore } from '@features/search/SearchStore'

export default function Results() {

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
              selectedPlace={(id) =>
                console.log('selected place:', id)
              }
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


/* <APIProvider
          apiKey={googleMapsApiKey}
          onLoad={() => console.log('Google Maps API loaded')}
        >
          <Map
            mapId={'7878137321951141'}
            defaultZoom={5}
            defaultCenter={{ lat: -41.07947511256469, lng: -187.30930147106835 }}
            onCameraChanged={(event: MapCameraChangedEvent) => {
              console.log('camera changed:', event.detail.center, 'zoom:', event.detail.zoom)
            }}
          >
          </Map>
        </APIProvider> */

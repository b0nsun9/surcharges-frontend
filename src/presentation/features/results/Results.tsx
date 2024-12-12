/* styles */
import styles from './Results.module.css'

/* frameworks */
import { Link, useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useState } from 'react'

/* components */
import SearchBox from '@components/searchBox/SearchBox'
import Places from '@components/places/Places'
import Footer from '@components/footer/Footer'

/* usecases */
import SearchPlaces from '@usecases/SearchPlaces'

export default function Results() {

  const location = useLocation()

  if (!location.state) {
    return (
      <div className={styles['wrong-access']}>
        <p>Wrong access!</p>
      </div>
    )
  }

  const [searchText, setSearchText] = useState(location.state.searchText)

  const { data, isFetching, refetch } = useQuery(
    'places',
    () => SearchPlaces(searchText),
    {
      refetchOnWindowFocus: false
    }
  )


  const handleOnChange = (text: string) => {
    setSearchText(text)
  }

  const handleOnSubmit = () => {
    if (searchText) {
      refetch()
    }
  }

  return (
    <div>
      <div className={styles.headerContainer}>
        <Link to='/' className={styles['service-title']}>Surcharges</Link>
        <SearchBox
          placeHolder={searchText}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        />
      </div>
      <div>
        {isFetching
          ? <p className={styles.loading}>Loading</p>
          : <Places places={data && data.places} />
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
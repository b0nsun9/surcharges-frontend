/* styles */
import styles from './PlaceList.module.css'

/* frameworks */

/* components */

/* usecases */
import { MakeAddress } from '@features/address'

interface PlacesListProps {
  places: []
  selectedPlace: (id: string) => void
}

export default function PlacesList({ places, selectedPlace }: PlacesListProps) {

  const handleOnClick = (id: string) => {
    selectedPlace(id)
  }

  return (
    <div>
      {
        places && places.map((place: any) => (
          <Place
            place={place}
            key={place.id}
            onClick={(id) =>
              handleOnClick(id)
            }
          />
        ))
      }
    </div>
  )
}

interface PlaceProps {
  place: any
  onClick: (id: string) => void
}

function Place({ place, onClick }: PlaceProps) {
  return (
    <div
      className={styles['place-wrapper']}
      onClick={() => onClick(place.id)}
    >
      <div className={styles['place-name']}>
        <p>{place.displayName.text}</p>
      </div>
      <div className={styles['place-address']}>
        <p>
          {
            MakeAddress(place.addressComponents, place.formattedAddress)
          }
        </p>
      </div>
    </div>
  )
}
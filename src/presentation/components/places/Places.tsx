/* styles */
import Place from '@components/place/Place'
import styles from './Places.module.css'

/* frameworks */

/* components */

/* usecases */

interface PlacesProps {
  places: []
}

export default function Places({ places }: PlacesProps) {
  return (
    <div>
      {places && places.map((place: any) => {
        return (
          <Place place={place} />
        )
      })}
    </div>
  )
}
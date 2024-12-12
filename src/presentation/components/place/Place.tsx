/* styles */
import styles from './Place.module.css'

/* frameworks */

/* components */

/* usecases */

interface PlaceProps {
  place: any
}

export default function Place({ place }: PlaceProps) {
  return (
    <div key={place.id}>
      <p>{place.displayName.text}</p>
      <p>{place.formattedAddress}</p>
    </div>
  )
}
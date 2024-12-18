import { Place } from "@entities/place/index"

import { PlaceItem } from "./PlaceItem"

interface PlacesListProps {
  places: Place[]
  selectedPlace: (id: string) => void
}

export default function PlacesList({ places, selectedPlace }: PlacesListProps) {

  const handleOnClick = (id: string) => {
    selectedPlace(id)
  }

  return (
    <div className='flex flex-col items-center justify-center mt-10 mb-10'>
      {
        places && places.map((place: Place) => (
          <PlaceItem
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
import { PlaceUI } from "@entities/place"

interface PlaceItemProps {
  place: PlaceUI
  onClick: (id: string) => void
}

export function PlaceItem({ place, onClick }: PlaceItemProps) {
  return (
    <div
      className='flex flex-col items-center justify-center rounded-md p-2 m-2 cursor-pointer hover:bg-gray-200'
      onClick={() => onClick(place.id)}
    >
      <div className='font-bold'>
        <p>{place.name}</p>
      </div>
      <div className='text-center'>
        <p>{place.address}</p>
      </div>
    </div>
  )
}
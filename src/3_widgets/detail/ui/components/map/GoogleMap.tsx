import { PlaceUI } from "@entities/place"
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps"

interface GoogleMapProps {
  isFetching: boolean
  placeUI: PlaceUI
}

export function GoogleMap(props: GoogleMapProps) {

  if (props.isFetching) {
    return null
  }

  return (
    <div className='flex flex-col items-center justify-center mt-10'>
      <div className='aspect-square sm:size-[400px] size-full'>
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_JAVASCRIPT_API_KEY}>
          <Map
            mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
            defaultZoom={18}
            defaultCenter={{ lat: props.placeUI.location.latitude, lng: props.placeUI.location.longitude }}
          >
            <AdvancedMarker position={{ lat: props.placeUI.location.latitude, lng: props.placeUI.location?.longitude }} />
          </Map>
        </APIProvider>
      </div>
    </div>
  )
}
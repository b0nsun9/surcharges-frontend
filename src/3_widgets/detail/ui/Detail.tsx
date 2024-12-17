import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps"

import { Place } from "@entities/Place"

import { GetPlaceDetail } from "../api/GetPlaceDetail"
import { usePlaceDetailStore } from "../model/PlaceDetailStore"

export function Detail() {

  const { id } = useParams()

  const { place, setPlace } = usePlaceDetailStore()

  const { isFetching } = useQuery({
    queryKey: 'placeDetail',
    retry: false,
    queryFn: () => GetPlaceDetail(id as string),
    refetchOnWindowFocus: false,
    onSuccess: (data: Place) => {

      setPlace(data)

    }
  })

  return (
    <div>
      <div>
        <p>{place.displayName.text}</p>
      </div>
      <div>
        <p>
          {
            
          }
        </p>
      </div>
      {
        isFetching
          ? <p>Loading...</p>
          : <div style={{ height: '400px', width: '400px' }}>
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
              <Map
                mapId={'7878137321951141'}
                defaultZoom={18}
                defaultCenter={{ lat: place.location?.latitude ?? 0, lng: place.location?.longitude ?? 0 }}
              >
                <AdvancedMarker position={{ lat: place.location?.latitude ?? 0, lng: place.location?.longitude ?? 0 }}></AdvancedMarker>
              </Map>
            </APIProvider>
          </div>
      }
    </div>
  )
}
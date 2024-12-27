import { useNavigate, useParams } from "react-router-dom"
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps"

import { usePlaceViewModel } from "../model/usePlaceViewModel"
import { SurchargesDetail } from "./SurchargesDetail"
import { Footer } from "@shared/ui"

export function Detail() {

  const { id } = useParams() as { id: string }

  const viewModel = usePlaceViewModel(id)

  const navigate = useNavigate()

  const onClickToReport = () => {
    navigate('/report', {
      state: {
        placeId: viewModel.convertPlace.id,
        displayName: viewModel.convertPlace.displayName
      }
    })
  }

  return (
    <div>
      <div>
        <div className='flex flex-col items-center justify-center mt-10'>
          <p className='font-bold text-center text-3xl'>{viewModel.convertPlace.displayName}</p>
          <p className='text-center'>{viewModel.convertPlace.address}</p>
        </div>
        <div className='flex flex-col items-center justify-center mt-10'>
          <SurchargesDetail
            placeId={id}
            onClickToReport={onClickToReport}
          />
        </div>
        <div className='flex flex-col items-center justify-center mt-10'>
          {
            viewModel.isFetching
              ? <p>Loading...</p>
              : <div className='aspect-square sm:size-[400px] size-11/12'>
                <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_JAVASCRIPT_API_KEY}>
                  <Map
                    mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
                    defaultZoom={18}
                    defaultCenter={{ lat: viewModel.convertPlace.location?.latitude ?? 0, lng: viewModel.convertPlace.location?.longitude ?? 0 }}
                  >
                    <AdvancedMarker position={{ lat: viewModel.convertPlace.location?.latitude ?? 0, lng: viewModel.convertPlace.location?.longitude ?? 0 }}></AdvancedMarker>
                  </Map>
                </APIProvider>
              </div>
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}
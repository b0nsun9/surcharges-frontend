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
        place: viewModel.placeModel
      }
    })
  }

  return (
    <div className='sm:ml-10 ml-5 sm:mr-10 mr-5'>
      <div>
        <div className='flex flex-col items-center justify-center mt-10'>
          <p className='font-bold text-center text-3xl'>{viewModel.placeUI.name}</p>
          <p className='text-center'>{viewModel.placeUI.address}</p>
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
              : <div className='aspect-square sm:size-[400px] size-full'>
                <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_JAVASCRIPT_API_KEY}>
                  <Map
                    mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
                    defaultZoom={18}
                    defaultCenter={{ lat: viewModel.placeUI.location.latitude, lng: viewModel.placeUI.location.longitude }}
                  >
                    <AdvancedMarker position={{ lat: viewModel.placeUI.location.latitude, lng: viewModel.placeUI.location?.longitude}}></AdvancedMarker>
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
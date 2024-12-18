import { Link, useParams } from "react-router-dom"
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps"

import { SearchBox } from "@features/searchBox"

import { usePlaceViewModel } from "../model/usePlaceViewModel"
import { SurchargesDetail } from "./SurchargesDetail"

export function Detail() {

  const { id } = useParams() as { id: string }

  const viewModel = usePlaceViewModel(id)

  return (
    <div>
      <div className='flex items-center justify-center mt-10'>
        <Link to='/' className='mr-10 font-bold text-black text-3xl cursor-pointer'>Surcharges</Link>
        <SearchBox text={viewModel.convertPlace.displayName} replace={false} />
      </div>
      <div>
        <div className='flex flex-col items-center justify-center mt-10'>
          <p className='font-bold'>{viewModel.convertPlace.displayName}</p>
          <p>{viewModel.convertPlace.address}</p>
        </div>
        <div className='flex flex-col items-center justify-center mt-10'>
          <SurchargesDetail placeId={id}></SurchargesDetail>
        </div>
        <div className='flex flex-col items-center justify-center mt-10'>
          {
            viewModel.isFetching
              ? <p>Loading...</p>
              : <div className='aspect-square sm:size-[400px]'>
                <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                  <Map
                    mapId={'7878137321951141'}
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
    </div>
  )
}
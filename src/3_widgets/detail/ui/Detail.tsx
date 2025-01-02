import { useNavigate, useParams, useLocation } from "react-router-dom"
import { usePlaceViewModel } from "../model/usePlaceViewModel"
import { SurchargesDetail } from "./components/surchargeInformation/SurchargesDetail"
import { Footer } from "@shared/ui"
import { WrongAccess } from "@shared/ui"
import { GoogleMap } from "./components/map/GoogleMap"

export function Detail() {

  const location = useLocation().state

  if (!location) {
    return (
      <WrongAccess />
    )
  }

  const { id } = location as { id: string }

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
            surchargeModel={viewModel.surchargeModel}
            onClickToReport={onClickToReport}
          />
        </div>
        <GoogleMap isFetching={viewModel.isFetching} placeUI={viewModel.placeUI} />
      </div>
      <Footer />
    </div>
  )
}
import { SurchargesStatus } from "@entities/surcharges"
import { useSurchargesDetailViewModel } from "../model/useSurchargesDetail"
import { Confirmed } from "./status/Confirmed"
import { Reported } from "./status/Reported"
import { Unknown } from "./status/Unknown"

interface SurchargesDetailProps {
  placeId: string
}

export function SurchargesDetail(props: SurchargesDetailProps) {

  const viewModel = useSurchargesDetailViewModel(props.placeId)

  function Status() {
    switch (viewModel.data.surchagres.status) {
      case SurchargesStatus.Confirmed:
        return <Confirmed percentage={viewModel.data.surchagres.percentages}/>
      case SurchargesStatus.Reported:
        return <Reported percentage={viewModel.data.surchagres.percentages}/>
      case SurchargesStatus.Unknown:
        return <Unknown />
    }
  }
  
  return (
    <div>
      <div className='flex items-center'>
        <Status />
      </div>
    </div>
  )
}
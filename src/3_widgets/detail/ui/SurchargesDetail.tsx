import { SurchargesStatus } from "@entities/surcharges"
import { useSurchargesDetailViewModel } from "../model/useSurchargesDetail"
import { Confirmed } from "./status/Confirmed"
import { Reported } from "./status/Reported"
import { Unknown } from "./status/Unknown"

interface SurchargesDetailProps {
  placeId: string
  onClickToReport: () => void
}

export function SurchargesDetail(props: SurchargesDetailProps) {

  const viewModel = useSurchargesDetailViewModel(props.placeId)

  const onClickToReport = () => {
    props.onClickToReport()
  }

  function Status() {
    switch (viewModel.data.surchagres.status) {
      case SurchargesStatus.Confirmed:
        return <Confirmed 
          percentage={viewModel.data.surchagres.percentages}
          onClickToReport={onClickToReport}
        />
      case SurchargesStatus.Reported:
        return <Reported 
          percentage={viewModel.data.surchagres.percentages}
          onClickToReport={onClickToReport}
        />
      case SurchargesStatus.Unknown:
        return <Unknown onClickToReport={onClickToReport}/>
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
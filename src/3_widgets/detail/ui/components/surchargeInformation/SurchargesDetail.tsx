import { SurchargesStatus } from "@entities/surcharges"
import { SurchargeModel } from "@entities/surcharges/model/SurchargeModel"
import { Confirmed } from "./status/Confirmed"
import { Reported } from "./status/Reported"
import { Unknown } from "./status/Unknown"
import { ReportedDate } from "./dates/ReportedDate"
import { SurchargeRate } from "./rates/SurchargeRate"
import { ReportButton } from "./buttons/ReportButton"

interface SurchargesDetailProps {
  surchargeModel: SurchargeModel
  onClickToReport: () => void
}

export function SurchargesDetail(props: SurchargesDetailProps) {

  const onClickToReport = () => {
    props.onClickToReport()
  }

  function Status() {
    switch (props.surchargeModel.status) {
      case SurchargesStatus.Confirmed:
        return <Confirmed />
      case SurchargesStatus.Reported:
        return <Reported />
      case SurchargesStatus.Unknown:
        return <Unknown />
    }
  }

  function Rate() {
    if (!props.surchargeModel.rate) {
      return null
    }
    
    return <SurchargeRate rate={props.surchargeModel.rate} />
  }

  function Report() {
    switch (props.surchargeModel.status) {
      case SurchargesStatus.Confirmed:
        return <ReportButton message='Something wrong?' onClickToReport={onClickToReport} />
      case SurchargesStatus.Reported:
        return null
      case SurchargesStatus.Unknown:
        return <ReportButton message='Be a first contributer!' onClickToReport={onClickToReport} />
    }
  }

  return (
    <div>
      <div className='flex items-center justify-center'>
        <Rate />
        <Status />
      </div>
      <div className='flex flex-col items-center justify-center mt-3'>
        <ReportedDate dateInSeconds={props.surchargeModel.reportedDate} />
        <Report />
      </div>
    </div>
  )
}
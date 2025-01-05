import { SurchargesUI, SurchargesStatusUI } from "@entities/surcharges"
import { Confirmed, Reported, Unknown, StatusHelp } from '@shared/ui'
import { ReportedDate } from "./dates/ReportedDate"
import { SurchargeRate } from "./rates/SurchargeRate"
import { ReportButton } from "./buttons/ReportButton"

interface SurchargesDetailProps {
  surchargesUI: SurchargesUI
  onClickToReport: () => void
}

export function SurchargesDetail(props: SurchargesDetailProps) {

  const onClickToReport = () => {
    props.onClickToReport()
  }

  function Status() {
    switch (props.surchargesUI.status) {
      case SurchargesStatusUI.Confirmed:
        return <Confirmed />
      case SurchargesStatusUI.Reported:
        return <Reported />
      case SurchargesStatusUI.Unknown:
        return <Unknown />
    }
  }

  function Rate() {
    if (!props.surchargesUI.rate) {
      return null
    }

    return <SurchargeRate rate={props.surchargesUI.rate} />
  }

  function Report() {
    switch (props.surchargesUI.status) {
      case SurchargesStatusUI.Confirmed:
        return <ReportButton message='Something wrong?' onClickToReport={onClickToReport} />
      case SurchargesStatusUI.Reported:
        return null
      case SurchargesStatusUI.Unknown:
        return <ReportButton message='Be a first contributer!' onClickToReport={onClickToReport} />
    }
  }

  return (
    <div>
      <div className='flex items-center justify-center gap-2'>
        <Rate />
        <div className='flex gap-0'>
          <Status />
          <StatusHelp includingUnknown/>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mt-3'>
        <ReportedDate dateInSeconds={props.surchargesUI.reportedDate} />
        <Report />
      </div>
    </div>
  )
}
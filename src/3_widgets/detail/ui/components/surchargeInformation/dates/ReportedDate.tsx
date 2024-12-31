import { SecondsToDate } from "@shared/model"

interface ReportedDateProps {
  dateInSeconds?: number
}

export function ReportedDate(props: ReportedDateProps) {

  if (!props.dateInSeconds) {
    return null 
  }

  return (
    <p>Updated at {SecondsToDate(props.dateInSeconds)  }</p>
  )
}
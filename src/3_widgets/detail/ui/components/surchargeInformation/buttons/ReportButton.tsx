interface ReportButtonProps {
  message: string
  onClickToReport: () => void
}

export function ReportButton(props: ReportButtonProps) {
  return (
    <div className='flex justify-center'>
      <p
        className='underline cursor-pointer'
        onClick={props.onClickToReport}
      >
        {props.message}
      </p>
    </div>
  )
}
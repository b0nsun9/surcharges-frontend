interface ReportedProps {
  percentage: number
  onClickToReport: () => void
}

export function Reported(props: ReportedProps) {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex items-center'>
        <div className='mr-2 font-bold text-2xl'>
          {
            props.percentage === 0
              ? <p>No surcharges🎉</p>
              : <p>{props.percentage * 100}%</p>
          }
        </div>
        <div className='rounded-lg bg-blue-300 text-blue-800'>
          <p className='pl-2 pr-2 pt-1 pb-1'>Reported</p>
        </div>
      </div>
      <div className='flex justify-center'>
        <p
          className='underline cursor-pointer'
          onClick={props.onClickToReport}
        >
          Do you want to report another one?
        </p>
      </div>
    </div>
  )
}
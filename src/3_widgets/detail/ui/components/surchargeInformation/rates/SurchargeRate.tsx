interface SurchargeRateProps {
  rate: number
}

export function SurchargeRate(props: SurchargeRateProps) {
  return (
    <div className='mr-2 font-bold text-2xl'>
      {
        props.rate === 0
          ? <p>No surcharges🎉</p>
          : <p>{props.rate}%</p>
      }
    </div>
  )
}
import { ChangeEvent } from "react"
import { TextField } from "@mui/material"

interface InputAmountsProps {
  isCalculated: boolean
  totalAmountValue: string
  totalAmountDisabled: boolean
  totalAmountOnChange: (event: ChangeEvent<HTMLInputElement>) => void
  surchargeAmountValue: string
  surchargeAmountDisabled: boolean
  surchargeAmountOnChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function InputAmounts(props: InputAmountsProps) {

  if (!props.isCalculated) {
    return null
  }

  return (
    <div className='flex flex-col gap-4'>
      <TextField
        label='Total Amount'
        variant='outlined'
        size='small'
        value={props.totalAmountValue}
        disabled={props.totalAmountDisabled}
        onChange={props.totalAmountOnChange}
      />
      <TextField
        label='Amount of Surcharges'
        variant='outlined'
        size='small'
        value={props.surchargeAmountValue}
        disabled={props.surchargeAmountDisabled}
        onChange={props.surchargeAmountOnChange}
      />
    </div>
  )
}
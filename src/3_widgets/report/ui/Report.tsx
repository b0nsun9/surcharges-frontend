import { ChangeEvent } from "react"
import { useLocation } from "react-router-dom"
import { TextField } from "@mui/material"
import { LoadingButton } from "@mui/lab"
import { UploadButton } from "./components/UploadButton"

import { MakeURL } from "../model/usecases/MakeURL"
import { WrongAccess } from "@shared/ui"

import { useReportViewModel } from "../model/viewmodels/useReportViewModel"

export function Report() {

  const location = useLocation().state

  if (!location) {
    return (
      <WrongAccess />
    )
  }

  const { placeId, displayName } = location

  const amountsViewModel = useReportViewModel()

  const handleFileChange = async (files: FileList) => {
    const url = MakeURL(files[0])
    amountsViewModel.extractAmounts(url)
  }

  const handleOnChangeTotalAmount = (event: ChangeEvent<HTMLInputElement>) => {
    amountsViewModel.setTotalAmount(event.target.value)
  }

  const handleOnChangeSurchargeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    amountsViewModel.setSurchargeAmount(event.target.value)
  }

  return (
    <div className=' ml-10 mr-10'>
      <div className='flex flex-col items-center justify-center mt-10'>
        <p className='text-3xl mr-2 text-center'>You are going to report surcharge information for</p>
        <p className='text-5xl font-bold text-center'>{displayName}</p>
      </div>
      <div className='flex flex-col items-center justify-center mt-10 gap-4'>
        <p className='text-base'>
          Please upload a photo of the receipt or terminal screen📸
        </p>
        <UploadButton
          loading={amountsViewModel.isCalculating}
          onChange={handleFileChange}
        />
        {
          !amountsViewModel.isExtractable
            ? <p className='text-red-500 text-center'>
              Unfortunately, it seems that the amounts from the image you provided were not recognised.<br />
              Please input both types of amounts manually.
            </p>
            : null
        }
        {
          amountsViewModel.isCalculated
            ? <div className='flex flex-col gap-4 mt-10'>
              <TextField
                label='Total Amount'
                variant='outlined'
                size='small'
                value={amountsViewModel.totalAmount}
                onChange={handleOnChangeTotalAmount}
              />
              <TextField
                label='Amount of Surcharges'
                variant='outlined'
                size='small'
                value={amountsViewModel.surchargeAmount}
                onChange={handleOnChangeSurchargeAmount}
              />
            </div>
            : null
        }
      </div>
      <div className='flex items-center justify-center mt-10'>
        {
          amountsViewModel.isCalculated
            ? <LoadingButton
              type='submit'
              variant='contained'
              loading={false}
              disabled={!amountsViewModel.isCalculated}
            >
              Report
            </LoadingButton>
            : null
        }
      </div>
    </div>
  )
}
import { create } from 'zustand'
import { ExtractText } from "../usecases/ExtractText"
import { ExtractTotalAmount } from '../usecases/ExtractTotalAmount'
import { ExtractSurchargeAmount } from '../usecases/ExtractSurchargeAmount'
import { isNumber } from '../usecases/isNumber'
import { MakeURL } from '../usecases/MakeURL'

type AmountStore = {
  image?: File
  totalAmount: string
  surchargeAmount: string
  isCalculating: boolean
  isCalculated: boolean
  isExtracted: boolean
  setTotalAmount: (totalAmount: string) => void
  setSurchargeAmount: (surchargeAmount: string) => void
  extractAmounts: (image: File) => Promise<void>
  setIsCalculating: (isCalculating: boolean) => void
  reset: () => void
}

const initialState = {
  image: undefined,
  totalAmount: '',
  surchargeAmount: '',
  isCalculating: false,
  isCalculated: false,
  isExtracted: true
}

export const useAmountStore = create<AmountStore>((set) => ({
  ...initialState,
  setTotalAmount: (totalAmount: string) => {

    if (!isNumber(totalAmount)) {
      return
    }

    set(() => ({ totalAmount }))
  },
  setSurchargeAmount: (surchargeAmount: string) => {

    if (!isNumber(surchargeAmount)) {
      return
    }

    set(() => ({ surchargeAmount }))
  },
  extractAmounts: async (image: File) => {

    set(() => ({ isCalculating: true }))

    const url = MakeURL(image)
    const amounts = await ExtractText(url)

    const totalAmount = ExtractTotalAmount(amounts)
    const surchargeAmount = ExtractSurchargeAmount(amounts)

    set(() => ({
      image: image,
      totalAmount: totalAmount || '',
      surchargeAmount: surchargeAmount || '',
      isCalculating: false,
      isCalculated: true,
      isExtracted: totalAmount !== null || surchargeAmount !== null
    }))
  },
  setIsCalculating: (isCalculating: boolean) => set(() => ({ isCalculating })),
  reset: () => set(initialState)
}))
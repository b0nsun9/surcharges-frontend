import { create } from 'zustand'
import { ExtractText } from "../usecases/ExtractText"
import { ExtractTotalAmount } from '../usecases/ExtractTotalAmount'
import { ExtractSurchargeAmount } from '../usecases/ExtractSurchargeAmount'
import { isNumber } from '../usecases/isNumber'

type AmountStore = {
  totalAmount: string
  surchargeAmount: string
  isCalculating: boolean
  isCalculated: boolean
  isExtractable: boolean
  setTotalAmount: (totalAmount: string) => void
  setSurchargeAmount: (surchargeAmount: string) => void
  extractAmounts: (url: string) => Promise<void>
  setIsCalculating: (isCalculating: boolean) => void
} 

export const useAmountStore = create<AmountStore>((set) => ({
  totalAmount: '',
  surchargeAmount: '',
  isCalculating: false,
  isCalculated: false,
  isExtractable: true,
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
  extractAmounts: async (url: string) => {
    
    const amounts = await ExtractText(url)

    const totalAmount = ExtractTotalAmount(amounts)
    const surchargeAmount = ExtractSurchargeAmount(amounts)
    
    set(() => ({ 
      totalAmount: totalAmount || '', 
      surchargeAmount: surchargeAmount || '',
      isCalculating: false,
      isCalculated: true,
      isExtractable: totalAmount !== null || surchargeAmount !== null
    }))
  },
  setIsCalculating: (isCalculating: boolean) => set(() => ({ isCalculating })),
}))
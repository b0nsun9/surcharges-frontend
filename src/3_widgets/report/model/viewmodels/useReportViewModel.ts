import { useAmountStore } from "../stores/useAmountStore"

export const useReportViewModel = () => {

  const totalAmount = useAmountStore((state) => state.totalAmount)
  const surchargeAmount = useAmountStore((state) => state.surchargeAmount)
  const isCalculating = useAmountStore((state) => state.isCalculating)
  const isCalculated = useAmountStore((state) => state.isCalculated)
  const isExtractable = useAmountStore((state) => state.isExtractable)
  
  const setTotalAmount = useAmountStore((state) => state.setTotalAmount)
  const setSurchargeAmount = useAmountStore((state) => state.setSurchargeAmount)
  const setIsCalculating = useAmountStore((state) => state.setIsCalculating)
  const _extractAmounts = useAmountStore((state) => state.extractAmounts)

  const extractAmounts = async (url: string) => {
    setIsCalculating(true)
    await _extractAmounts(url)
    setIsCalculating(false)
  }

  return { 
    totalAmount, 
    surchargeAmount, 
    isCalculating, 
    isCalculated,
    isExtractable,
    setTotalAmount, 
    setSurchargeAmount, 
    extractAmounts 
  }
}
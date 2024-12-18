import { useMemo } from "react"

import { Surcharges } from "@entities/surcharges"
import { SurchargesStatus } from "@entities/surcharges"

import { useGetSurchargesQuery } from "./useGetSurchargesQuery"

export const useSurchargesDetailViewModel = (placeId: string) => {
  const { data: useGetSurchargesQueryData, isFetching } = useGetSurchargesQuery(placeId)

  const data = useMemo(() => {
    return {
      surchagres: {
        status: SurchargesStatus.Reported,
        percentages: 0.025
      }
    }
  },
    [useGetSurchargesQueryData, isFetching]
  )

  return { data, isFetching }
}
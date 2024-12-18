import { useMemo } from "react"

import { useGetPlaceQuery } from "./useGetPlaceQuery"
import { MakeAddress } from "@shared/model"

export const usePlaceViewModel = (placeId: string) => {
  const { data: useGetPlaceQueryData, isFetching } = useGetPlaceQuery(placeId)

  const convertPlace = useMemo(() => {
    return {
      id: useGetPlaceQueryData?.id ?? '',
      displayName: useGetPlaceQueryData?.displayName.text ?? '',
      address: MakeAddress(useGetPlaceQueryData?.addressComponents ?? []),
      location: {
        latitude: useGetPlaceQueryData?.location?.latitude ?? 0,
        longitude: useGetPlaceQueryData?.location?.longitude ?? 0
      }
    }
  },
    [useGetPlaceQueryData, isFetching]
  )

  return { convertPlace, isFetching }
}
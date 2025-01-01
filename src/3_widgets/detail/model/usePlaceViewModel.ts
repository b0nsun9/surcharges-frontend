import { useMemo } from "react"

import { useGetPlaceQuery } from "./useGetPlaceQuery"
import { MakeAddress } from "@shared/model"

import { PlaceModel } from "@entities/place"
import { PlaceUI } from "@entities/place"
import { SurchargeModel } from "@entities/surcharges"
import { SurchargesStatus } from "@entities/surcharges"

export const usePlaceViewModel = (placeId: string) => {
  const { data: useGetPlaceQueryData, isFetching } = useGetPlaceQuery(placeId)

  const placeModel = useMemo((): PlaceModel => {
    return {
      id: useGetPlaceQueryData?.id ?? '',
      displayName: {
        text: useGetPlaceQueryData?.displayName.text ?? '',
        languageCode: useGetPlaceQueryData?.displayName.languageCode ?? ''
      },
      addressComponents: useGetPlaceQueryData?.addressComponents.map((component) => {
        return {
          longText: component.longText,
          shortText: component.shortText,
          types: component.types,
          languageCode: component.languageCode
        }
      }) ?? [],
      location: {
        latitude: useGetPlaceQueryData?.location?.latitude ?? 0,
        longitude: useGetPlaceQueryData?.location?.longitude ?? 0
      }
    }
  },
    [useGetPlaceQueryData, isFetching]
  )

  const placeUI = useMemo((): PlaceUI => {
    return {
      id: placeModel.id,
      name: placeModel.displayName.text,
      address: MakeAddress(placeModel.addressComponents),
      location: placeModel.location
    }
  },
    [placeModel]
  )

  const surchargeModel = useMemo((): SurchargeModel => {

    if (!useGetPlaceQueryData?.rate && !useGetPlaceQueryData?.reportedDate) {
      return {
        status: SurchargesStatus.Unknown
      }
    }
    
    return {
      status: SurchargesStatus.Reported,
      rate: useGetPlaceQueryData?.rate,
      reportedDate: useGetPlaceQueryData.reportedDate?.seconds
    }
    
  }, [useGetPlaceQueryData, isFetching])

  return { placeModel, placeUI, surchargeModel, isFetching }
}
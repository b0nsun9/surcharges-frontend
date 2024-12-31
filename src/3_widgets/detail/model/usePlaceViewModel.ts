import { useMemo } from "react"

import { useGetPlaceQuery } from "./useGetPlaceQuery"
import { MakeAddress } from "@shared/model"

import { PlaceModel } from "@entities/place"
import { PlaceUI } from "@entities/place"

export const usePlaceViewModel = (placeId: string) => {
  const { data: useGetPlaceQueryData, isFetching } = useGetPlaceQuery(placeId)

  const placeModel = useMemo((): PlaceModel => {
    return {
      id: useGetPlaceQueryData?.id ?? '',
      displayName: useGetPlaceQueryData?.displayName.text ?? '',
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
      name: placeModel.displayName,
      address: MakeAddress(placeModel.addressComponents),
      location: placeModel.location
    }
  },
    [placeModel]
  )

  return { placeModel, placeUI, isFetching }
}
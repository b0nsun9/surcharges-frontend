import { useMemo } from "react"

import { PlaceDTO, Place } from "@entities/place/index"

import { useGetPlacesQuery } from "./useGetPlacesQuery"
import { MakeAddress } from "@shared/model"

export const usePlaceListViewModel = (searchText: string, nextPageToken?: string) => {
  const { data: useGetPlacesQueryData, isFetching } = useGetPlacesQuery(searchText, nextPageToken)

  const convertPlaces = useMemo(() => {
    return {
      places: useGetPlacesQueryData?.places.map((place: PlaceDTO): Place => {
        return {
          id: place.id,
          displayName: place.displayName.text,
          address: MakeAddress(place.addressComponents),
          location: undefined
        }
      }),
      nextPageToken: useGetPlacesQueryData?.nextPageToken
    }
  },
    [useGetPlacesQueryData, isFetching]
  )

  return { convertPlaces, isFetching }
}
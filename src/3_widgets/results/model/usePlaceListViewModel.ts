import { useMemo } from "react"

import { PlaceDTO, PlaceUI } from "@entities/place"

import { useGetPlacesQuery } from "./useGetPlacesQuery"

import { MakeAddress } from "@shared/model"

export const usePlaceListViewModel = (searchText: string, nextPageToken?: string) => {
  const { data: useGetPlacesQueryData, isFetching } = useGetPlacesQuery(searchText, nextPageToken)

  const places = useMemo((): PlaceUI[] => {
    return useGetPlacesQueryData?.places.map((place: PlaceDTO): PlaceUI => {
      return {
        id: place.id,
        name: place.displayName.text,
        address: MakeAddress(place.addressComponents),
        location: {
          latitude: place.location?.latitude ?? 0,
          longitude: place.location?.longitude ?? 0
        }
      }
    }) ?? []
    },
      [useGetPlacesQueryData]
    )

  return { places, isFetching }
}
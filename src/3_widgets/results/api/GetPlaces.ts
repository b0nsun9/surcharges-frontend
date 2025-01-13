import { GetPlacesResponse } from './DTO/GetPlacesResponse'
import { AddressComponentsDTO } from '@entities/place'
import { SurchargesStatusDTO } from '@entities/surcharges'

export async function GetPlaces(searchText: string, nextPageToken?: string): Promise<{ places: GetPlacesResponse[], nextPageToken?: string }> {

  const baseURL = import.meta.env.VITE_BASE_URL

  const requestURL = nextPageToken && nextPageToken != '' 
  ? `${baseURL}/places?searchText=${searchText}&nextPageToken=${nextPageToken}`
  : `${baseURL}/places?searchText=${searchText}`

  const response = await fetch(requestURL, {
    method: 'GET'
  })

  if (!response.ok) {
    throw new Error('Network response was not okay')
  }

  const data = await response.json()

  return {
    places: data.places.map((place: GetPlacesResponse) => {
      return {
        id: place.id,
        displayName: {
          text: place.displayName.text,
          languageCode: place.displayName.languageCode
        },
        addressComponents: place.addressComponents.map((component: AddressComponentsDTO) => {
          return {
            longText: component.longText,
            shortText: component.shortText,
            types: component.types
          }
        }),
        status: place.status as SurchargesStatusDTO ?? SurchargesStatusDTO.UNKNOWN,
        rate: place.rate,
        reportedDate: place.reportedDate
      }
    }),
    nextPageToken: data.nextPageToken
  }
}
import { PlaceDTO } from '@entities/place/index'
import { AddressComponentsDTO } from '@entities/place/index'

export async function GetPlaceDetail(id: string): Promise<PlaceDTO> {

  const baseURL = import.meta.env.VITE_BASE_URL

  const requestURL = `${baseURL}/place?id=${id}`

  const response = await fetch(requestURL, {
    method: 'GET'
  })

  if (!response.ok) {
    throw new Error('Network response was not okay')
  }
  
  const data = await response.json()

  return {
    id: data.id,
    displayName: {
      text: data.displayName.text,
      languageCode: data.displayName.languageCode
    },
    addressComponents: data.addressComponents.map((component: AddressComponentsDTO) => {
      return {
        longText: component.longText,
        shortText: component.shortText,
        types: component.types
      }
    }),
    location: {
      latitude: data.location.latitude,
      longitude: data.location.longitude
    }
  }
}
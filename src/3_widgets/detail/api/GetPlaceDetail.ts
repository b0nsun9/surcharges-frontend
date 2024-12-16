import { Place } from '@entities/Place'
import { AddressComponents } from '@entities/Place'

export async function GetPlaceDetail(id: string): Promise<Place> {

  const response = await fetch(`https://places.googleapis.com/v1/places/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      'X-Goog-FieldMask': "id,displayName,formattedAddress,addressComponents,location",
    }
  })

  if (!response.ok) {
    throw new Error('Network response was not okay')
  }
  
  const data = await response.json()

  return {
    displayName: {
      text: data.displayName.text,
      languageCode: data.displayName.languageCode
    },
    formattedAddress: data.formattedAddress,
    addressComponents: data.addressComponents.map((component: AddressComponents) => {
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
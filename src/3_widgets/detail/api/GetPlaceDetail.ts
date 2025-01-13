import { GetPlaceDetailResponse } from './DTO/GetPlaceDetailResponse'
import { AddressComponentsDTO } from '@entities/place'
import { Timestamp } from 'firebase/firestore'

export async function GetPlaceDetail(id: string): Promise<GetPlaceDetailResponse> {

  const baseURL = import.meta.env.VITE_BASE_URL

  const requestURL = `${baseURL}/place?id=${id}`

  const response = await fetch(requestURL, {
    method: 'GET'
  })

  if (!response.ok) {
    throw new Error('Network response was not okay')
  }
  
  const data = await response.json()

  const reportedDate = ((): Timestamp | undefined => {
    if (data.reportedDate === undefined || data.reportedDate === null) {
      return undefined
    }

    return new Timestamp(data.reportedDate._seconds, data.reportedDate._nanoseconds)
  })
  
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
    },
    status: data.surchargeStatus,
    rate: data.rate,
    reportedDate: reportedDate()
  }
}
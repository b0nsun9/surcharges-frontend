import { postSurchargeInformation } from '../../api/postSurchargeInformation'
import { makeImageToBase64 } from './MakeImageToBase64'

type Location = {
  latitude: number,
  longitude: number
}

type addressComponents = {
  longText: string,
  shortText: string,
  types: string[],
  languageCode: string
}

type Place = {
  id: string,
  name: string,
  address: addressComponents[],
  location: Location
}

export type UploadSurchargeInformationRequest = {
  place: Place,
  image: File | undefined,
  totalAmount: number,
  surchargeAmount: number
}

export async function UploadSurchargeInformation(request: UploadSurchargeInformationRequest) {

  const encodedImage = await makeImageToBase64(request.image)  

  await postSurchargeInformation({
    place: {
      id: request.place.id,
      name: request.place.name,
      address: request.place.address,
      location: {
        latitude: request.place.location.latitude,
        longitude: request.place.location.longitude
      }
    },
    image: encodedImage,
    totalAmount: request.totalAmount,
    surchargeAmount: request.surchargeAmount
  })
  
}
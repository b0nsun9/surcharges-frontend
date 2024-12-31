import { PlaceModel } from '@entities/place'
import { postSurchargeInformation } from '../../api/postSurchargeInformation'
import { makeImageToBase64 } from './MakeImageToBase64'

export type UploadSurchargeInformationRequest = {
  place: PlaceModel,
  image: File | undefined,
  totalAmount: number,
  surchargeAmount: number
}

export async function UploadSurchargeInformation(request: UploadSurchargeInformationRequest) {

  const encodedImage = await makeImageToBase64(request.image)

  await postSurchargeInformation({
    place: {
      id: request.place.id,
      displayName: {
        languageCode: request.place.displayName.languageCode,
        text: request.place.displayName.text
      },
      addressComponents: request.place.addressComponents.map((component) => {
        return {
          longText: component.longText,
          shortText: component.shortText,
          types: component.types,
          languageCode: component.languageCode
        }
      }),
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
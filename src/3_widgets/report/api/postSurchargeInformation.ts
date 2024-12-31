import { PostSurchargeInformationRequest } from './DTO/PostSurchargeInformationRequest'

export async function postSurchargeInformation(request: PostSurchargeInformationRequest) {

  const baseURL = `${import.meta.env.VITE_BASE_URL}/surcharge`

  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      place: {
        id: request.place.id,
        displayName: request.place.displayName,
        addressComponents: request.place.addressComponents.map((component) => {
          return {
            longText: component.longText,
            shortText: component.shortText,
            types: component.types,
            languageCode: component.languageCode
          }
        }),
        location: {
          latitude: request.place.location?.latitude ?? 0,
          longitude: request.place.location?.longitude ?? 0
        }
      },
      image: request.image,
      totalAmount: request.totalAmount,
      surchargeAmount: request.surchargeAmount
    })
  })

  if (!response.ok) {
    throw new Error('Network response was not okay')
  }
}
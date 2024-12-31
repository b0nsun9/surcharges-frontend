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
        name: request.place.name,
        address: request.place.address.map((component) => {
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
      image: request.image,
      totalAmount: request.totalAmount,
      surchargeAmount: request.surchargeAmount
    })
  })

  if (!response.ok) {
    throw new Error('Network response was not okay')
  }
}
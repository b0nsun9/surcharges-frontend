type Location = {
  latitude: number
  longitude: number
}

type addressComponents = {
  longText: string
  shortText: string
  types: string[]
  languageCode: string
}

type Place = {
  id: string
  name: string
  address: addressComponents[]
  location: Location
}

export type PostSurchargeInformationRequest = {
  place: Place
  image: string
  totalAmount: number
  surchargeAmount: number
}
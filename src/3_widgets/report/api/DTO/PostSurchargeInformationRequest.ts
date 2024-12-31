import { PlaceDTO } from "@entities/place"

export type PostSurchargeInformationRequest = {
  place: PlaceDTO
  image: string
  totalAmount: number
  surchargeAmount: number
}
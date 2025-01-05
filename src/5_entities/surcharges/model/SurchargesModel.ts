import { SurchargesStatusModel } from "./SurchargesStatusModel"

export type SurchargesModel = {
  status: SurchargesStatusModel
  rate?: number
  reportedDate?: number
}
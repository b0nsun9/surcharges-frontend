import { SurchargesStatus } from "./SurchargesStatus"

export type SurchargeModel = {
  status: SurchargesStatus
  rate?: number
  reportedDate?: number
}
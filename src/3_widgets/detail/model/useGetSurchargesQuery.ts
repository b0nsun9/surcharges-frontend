import { useQuery } from "react-query"
import { GetSurcharges } from '../api/GetSurcharges'

export const useGetSurchargesQuery = (placeId: string) => {
  return useQuery({
    queryKey: ['surcharges', placeId],
    retry: false,
    queryFn: () => GetSurcharges(placeId),
    refetchOnWindowFocus: false
  })
}
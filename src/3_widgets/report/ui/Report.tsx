import { useParams } from "react-router-dom"

export function Report() {

  const placeId = useParams()

  console.log(placeId.id)
  return (
    <div>
      <p>{placeId.id}</p>
    </div>
  )
}
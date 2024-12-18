export async function GetSurcharges(id: string): Promise<string> {

  // const response = await fetch(`https://places.googleapis.com/v1/places/${id}`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  //     'X-Goog-FieldMask': "id,displayName,addressComponents,location",
  //   }
  // })

  // if (!response.ok) {
  //   throw new Error('Network response was not okay')
  // }

  return 'Surcharges'
}
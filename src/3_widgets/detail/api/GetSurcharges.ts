export async function GetSurcharges(id: string): Promise<string> {

  const baseURL = import.meta.env.VITE_BASE_URL

  const response = await fetch(`${baseURL}/surcharge?placeId=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error('Network response was not okay')
  }

  const data = await response.json()

  console.log(data)

  return 'Surcharges'
}
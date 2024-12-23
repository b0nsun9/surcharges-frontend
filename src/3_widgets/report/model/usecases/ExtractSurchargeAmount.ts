export function ExtractSurchargeAmount(text: string): string | null {
  const lowerCased = text.toLowerCase()
  const regex = /(surcharge)[\s:]*\$(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)/i
  const match = lowerCased.match(regex)
  return match ? match[2] : null
}
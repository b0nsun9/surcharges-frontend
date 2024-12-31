export function SecondsToDate(seconds: number, locale: string = 'en-NZ'): string {
  const date = new Date(seconds * 1000)
  return date.toLocaleDateString(locale)
}
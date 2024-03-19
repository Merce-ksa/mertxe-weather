export function formatDateEpochToLocalTime(date: number): string {
  return new Date(date * 1000).toLocaleTimeString()
}

export function formatDateToJSON(date: Date): string {
  return date.toJSON().slice(0, 10)
}
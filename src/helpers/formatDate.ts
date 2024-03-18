function formatDate(date: number): string {
  return new Date(date * 1000).toLocaleTimeString()
}
  
export default formatDate
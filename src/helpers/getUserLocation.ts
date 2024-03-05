export function getPermissionsLocation (): boolean {
  if(!navigator.geolocation) {
    console.log('si quieres que te muestre el teimpo de tu localidad, activa la ubicación')
    return true
  }

  return false
  
}

export async function getUserLocation (): Promise<[number, number]> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        resolve([coords.latitude, coords.longitude])
      },
      (error) => {
        throw new Error('No se ha podido obtener la localización')
        console.log(error)
        reject()
          
      }
    )
  })
}

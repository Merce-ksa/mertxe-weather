import { useEffect, useState } from 'react'
import { getUserLocation } from '../helpers/getUserLocation'

function useCoordinates () {
  const [coordinates, setCoordinates] = useState<number[]>([])
    
  useEffect(() => {
    getUserLocation().then((longLat: number[]) => setCoordinates(longLat))
  }, [])
  
  return { coordinates }
}

export default useCoordinates
import { useContext } from 'react'
import { SuggestionsContext } from '../context/suggestions'

function useSuggestions () {
  const forecast = useContext(SuggestionsContext)

  if(forecast === undefined) {
    throw Error('useContext must be used within a ForecastProvider')
  }
  
  return forecast
}

export default useSuggestions
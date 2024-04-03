import { ReactNode, createContext, useState } from 'react'
import axios from 'axios'
import { TOKEN } from '../services/APIConfig'
import SuggestionsCityNames from '../types/SuggestionsCityNames'

export interface SuggestionsContextType {
  suggestionsCityNames: SuggestionsCityNames[]
  getSuggestionsCityNames: (suggestion: string) => void
}

export const SuggestionsContext = createContext<SuggestionsContextType>({} as SuggestionsContextType)

export function SuggestionsProvider ({children}: { children: ReactNode }) {
  const [suggestionsCityNames, setSuggestionsCityNames] = useState<SuggestionsCityNames[]>([])

  const getSuggestionsCityNames = async (query: string) => {
    try {
      const { data } = await axios.get(`https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?text=${query}&f=json&token=${TOKEN}`)

      setSuggestionsCityNames(data.suggestions)

    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <SuggestionsContext.Provider value={{
      suggestionsCityNames,
      getSuggestionsCityNames
    }}>
      {children}
    </SuggestionsContext.Provider>
  )
}
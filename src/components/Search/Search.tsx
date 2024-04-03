import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import './Search.css'
import { BsSearch } from 'react-icons/bs'
import UNITS from '../../constants/units'
import SuggestionsCityNames from '../../types/SuggestionsCityNames'
import useWeather from '../../hooks/useWeather'
import useSuggestions from '../../hooks/useSuggestions'

function Search () {
  const { suggestionsCityNames, getSuggestionsCityNames } = useSuggestions()
  const { getForecastByCityName, getWeatherByCityName } = useWeather()
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<SuggestionsCityNames[]>([])
  const [selectedSuggestion, setSelectedSuggestion] = useState<boolean>(false)

  useEffect(() => {
    // Realizar la solicitud a la API cuando el valor del campo de entrada cambie
    if (query.trim() !== '' && !selectedSuggestion) {
      getSuggestionsCityNames(query)
    } else {
      setSuggestions([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  useEffect(() => {
    setSuggestions(suggestionsCityNames)
  }, [suggestionsCityNames])

  const handleChangeLocation = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
    setSelectedSuggestion(false)
  }
  
  const handleSelectCity = (suggestion: SuggestionsCityNames) => {
    setQuery(suggestion.text)
    setSelectedSuggestion(true)
    setSuggestions([])
  }
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    const locationFormatter = query.toLowerCase()
    getForecastByCityName(locationFormatter, UNITS.METRIC)
    getWeatherByCityName(locationFormatter, UNITS.METRIC)
    setQuery('')
    setSelectedSuggestion(false)
  }

  return (
    <div className='search-container'>
      <form className="search" id="search" name='search-header' onSubmit={handleSubmit}>
        <input
          type="text"
          id="searcher-header"
          className="input-header"
          placeholder="Barcelona, Donostia..."
          value={query}
          name="locationName"
          onChange={(event) => handleChangeLocation(event)}
        />
        <button name='submit-btn' className='submit-location'>
          <BsSearch className='search-icon' />
        </button>
      </form>
      <ul className='suggestions'>
        {suggestions && suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSelectCity(suggestion)}>{suggestion.text}</li>
        ))}
      </ul>
    </div>
  )
}



export default Search
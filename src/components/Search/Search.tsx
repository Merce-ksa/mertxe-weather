import { ChangeEvent, FormEvent, useState } from 'react'
import './Search.css'
import { BsSearch } from 'react-icons/bs'

function Search () {
  const [location, setLocation] = useState('')

  const handleChangeLocation = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value)
  }
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    const locationFormatter = location.toLowerCase()
  }


  return (
    <>
      <div className="search-wrap">
        <form id="search" name='search-header' onSubmit={handleSubmit}>
          <input
            type="text"
            id="searcher-header"
            className="input-header"
            placeholder="Barcelona, Donostia..."
            value={location}
            name="locationName"
            onChange={(event) => handleChangeLocation(event)}
          />
          <button name='submit-btn' className='submit-location'>
            <BsSearch className='search-icon' />
          </button>
        </form>
      </div>
    </>
  )
}

export default Search
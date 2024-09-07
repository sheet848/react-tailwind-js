import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SearchBar = ({setQuery}) => {
  return (
    <>
    <div className="search-container">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
      onChange={(e) => setQuery(e.target.value.toLowerCase())} 
      type="text" placeholder='Search for a country...' />
    </div>
    </>
  )
}

export default SearchBar
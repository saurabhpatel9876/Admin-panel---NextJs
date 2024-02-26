
import React from 'react'
import { MdSearch } from 'react-icons/md'
const Search = ({placeholder}) => {
  return (
    <div className="flex">
    <MdSearch size={30} />
    <input
      type="text"
      placeholder={placeholder}
      className="p-2"
    //   onChange={handleSearch}
    />
  </div>
  )
}

export default Search
import React from 'react'

function SelectMenu({ setQuery }) {
  return (
    <select className="filter-by-region" onChange={(e) => setQuery(e.target.value)}>
      <option hidden="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}

export default SelectMenu
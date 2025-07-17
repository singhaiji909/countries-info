import { useState } from 'react'
import CountriesList from './CountriesList'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'

function Home() {
  const [ query, setQuery ] = useState('');

  return (
    <>
      <div className='search-filter-container'>
        <SelectMenu />
        <SearchBar setQuery={setQuery} />
      </div>
      <CountriesList query={query}/>
    </>
  )
}

export default Home;

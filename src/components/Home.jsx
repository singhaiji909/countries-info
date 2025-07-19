import { useState } from 'react'
import CountriesList from './CountriesList'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import { useOutletContext } from 'react-router-dom';

function Home() {
  const [ query, setQuery ] = useState('');
  const [isDark] = useOutletContext();

  return (
    <main className={isDark ? 'dark' : ''}>
      <div className='search-filter-container'>
        <SelectMenu />
        <SearchBar setQuery={setQuery} />
      </div>
      <CountriesList query={query}/>
    </main>
  )
}

export default Home;

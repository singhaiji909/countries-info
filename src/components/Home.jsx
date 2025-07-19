import { useState } from 'react'
import CountriesList from './CountriesList'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import { useTheme } from '../hooks/useTheme';

function Home() {
  const [ query, setQuery ] = useState('');
  const [ isDark ] = useTheme();

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

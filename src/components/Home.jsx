import { useState } from 'react'
import CountriesList from './CountriesList'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import { useTheme } from '../hooks/useTheme';

function Home() {
  const [ query, setQuery ] = useState('');
  const [ isDark ] = useTheme();
console.log(query);
  return (
    <main className={isDark ? 'dark' : ''}>
      <div className='search-filter-container'>
        <SelectMenu setQuery={setQuery}/>
        <SearchBar setQuery={setQuery} />
      </div>
      <CountriesList query={query}/>
    </main>
  )
}

export default Home;

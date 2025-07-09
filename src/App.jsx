import { useState } from 'react'
import './App.css'
import CountriesList from './components/CountriesList'
import Header from './components/header'
import SearchBar from './components/SearchBar'
import SelectMenu from './components/SelectMenu'

function App() {
  const [ query, setQuery ] = useState('');

  return (
    <>
      <Header />
      <div className='search-filter-container'>
        <SelectMenu />
        <SearchBar setQuery={setQuery} />
      </div>
      <CountriesList query={query}/>
    </>
  )
}

export default App

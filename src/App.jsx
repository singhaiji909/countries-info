import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/header'
import { useState } from 'react';


function App () {
  const [ isDark, setIsDark ] = useState(false);
  return (
    <>
      <Header theme={[isDark, setIsDark]}/>
      <Outlet context={[ isDark ]}/>
    </>
  )
}

export default App

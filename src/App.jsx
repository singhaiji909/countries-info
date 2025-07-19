import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/header'
import { ThemeProvider } from './contexts/ThemeContext.jsx';


function App () {

  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  )
}

export default App

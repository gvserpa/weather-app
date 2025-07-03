import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavMenu from './components/NavMenu'
import Main from './components/Main'

function App() {
  const [weatherData, setWeatherData] = useState(null)

  return (
    <>
      <Header onWeatherData={setWeatherData}/>
      <NavMenu />
      <Main data={weatherData} />
    </>
  )
}

export default App

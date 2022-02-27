import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import "@adorable.css"
import Tickets from './sections/Ticket'

function App() {
  useEffect(() => {

    let vh = window.innerHeight * 0.01;
    console.log(window.innerHeight)
    document.documentElement.style.setProperty('--vh', `100vh`);
  }, [])
  return (
    <div className="App">
      <Tickets />
    </div>
  )
}

export default App

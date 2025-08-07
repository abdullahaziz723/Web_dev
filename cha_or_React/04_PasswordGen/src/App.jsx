import { useState } from 'react'

import './App.css'

function App() {
  const [lenght,setLength]= useState(8)
  const [number,setNumber]= useState(false)
  const [symbol,setSymbol]= useState(false)
  const[Password,setpassword]= useState("")
  const PasswordGenerator=()=>{

  }

  return (
    <>
      <h1 className='text-7xl text-center text-white' >Password Generator</h1>
    </>
  )
}

export default App

import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
     <h1 className='bg-green-400 text-black mb-4' >This is sample text</h1>
     <Card  username ="chaiorcode"/>
      
     </div>
    </>
  )
}

export default App

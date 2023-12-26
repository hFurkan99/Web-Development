import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(0);
  
  const handleClick = () => {
    setValue(value + 1);
  };

  return (
    <>
          <h1>Sayaç : {value}</h1>
          <button onClick={handleClick}>Sayıyı arttır</button>   
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  // let counter=5;
  const addValue = () => {
    // counter=counter+1;
    console.log("Value added", counter)
    setCounter(counter+1)
  }
    const removeValue = () => {
    console.log("Value removed", counter)
    setCounter(counter-1)
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue }> add value{counter}</button>
      <button onClick={removeValue}>reduce value{counter}</button>
        <p>footer: {counter}</p>
    </>
  )
}

export default App

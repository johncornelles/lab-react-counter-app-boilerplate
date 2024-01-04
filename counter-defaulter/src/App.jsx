// import { useState } from 'react'
import './App.css'
import Appclass from './Components/Appclass'
function App() {
  // const [count, setCount] = useState(0)
  
  // const decrement = () => {
  //   let newCount = count - 1;
  //   if (newCount < 0) {
  //     newCount = 0;
  //   }
  //   setCount(newCount)
  // }

  // const increment = () => {
  //   let newCount = count + 1;
  //   setCount(newCount)
  // }

  // const resetCounter = () => {
  //   setCount(0);
  // }

  return(
    <>
    {/* <h1>Counter App</h1>
    <p>{count}</p>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
    <button onClick={resetCounter}>reset</button> */}
    <Appclass />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './friends'
Friends
Counter
Team

function App() {
  function handleClick() {
    alert('Button Clicked')
  }

  function handleClick2() {
    alert('Button Clicked2')
  }

  const addToFIve = (num) => {
    alert(num + 5)
  }
  return (
    <>

      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => { alert('button clicked3') }}>Third</button>
      {/* vaijalla */}
      <button onClick={()=> addToFIve(3)}>Four</button>

    </>
  )
}

export default App

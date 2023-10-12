import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  function Inc()
  {
    setCount(count+1);
  }
  function dec()
  {
    if(count>0)
    {
      setCount(count-1)
    }
    else
    {
      alert("sorry the limit is reached.")
    }
  }

  return (
    <>
<div className='main_div'>
  <div className='center_div'>
    <h2>COUNTER APP</h2>
    <h1>{count}</h1>
    <div className='btn_div'>
      <button onClick={Inc}>Increament</button>
      <button onClick={dec}>decreament</button>
    </div>
  </div>
</div>
     </>   
  )
}             
        
export default App

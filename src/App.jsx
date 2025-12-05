import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    let [counter,setCounter]=useState(5);
    let addValue=()=>{
      setCounter(counter=>{
        if(counter>=20){
          return counter;
        }
        return counter+1;
      });
      console.log("clicked",counter+1);
    }
    

    let removeValue=()=>{
      setCounter(counter=>{
        if(counter<=0){
          return counter;
        }
        return counter-1;
      });
      console.log("clicked",counter-1);
    }

  return (
    <>
      <h1>start to learn react js</h1>
      <h2>Counter Value:{counter}</h2>
      <button
      onClick={addValue}
      >Add Value{counter}</button>
      <br /><br />
      <button
      onClick={removeValue}
      >Remove Value{counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App

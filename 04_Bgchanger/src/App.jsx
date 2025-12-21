import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor]=useState("yellow")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3'>
        <div className='flex flex-wrap justify-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-xl'>
          <button className='outline-none px-4 py-1 text-white rounded-full shadow-2xl'
            onClick={()=>setColor("red")}
            style={{backgroundColor:"red"}}>
            Red
          </button>
          <button className='outline-none px-4 py-1 text-white rounded-full shadow-2xl'
            onClick={()=>setColor("blue")}
            style={{backgroundColor:"blue"}}>
            blue
          </button>
          <button className='outline-none px-4 py-1 text-white rounded-full shadow-2xl'
            onClick={()=>setColor("green")}
            style={{backgroundColor:"green"}}>
            green
          </button>
          <button className='outline-none px-4 py-1 text-white rounded-full shadow-2xl'
            onClick={()=>setColor("black")}
            style={{backgroundColor:"black"}}>
            black
          </button>
          <button className='outline-none px-4 py-1 text-white rounded-full shadow-2xl'
            onClick={()=>setColor("orange")}
            style={{backgroundColor:"orange"}}>
            orange
          </button>
          <button className='outline-none px-4 py-1 text-white rounded-full shadow-2xl'
            onClick={()=>setColor("indigo")}
            style={{backgroundColor:"indigo"}}>
            Indigo
          </button>
          <button className='outline-none px-4 py-1 text-white rounded-full shadow-2xl'
            onClick={()=>setColor("gray")}
            style={{backgroundColor:"gray"}}>
            gray
          </button>
          <button className='outline-none px-4 py-1 text-white rounded-full shadow-2xl'
            onClick={()=>setColor("purple")}
            style={{backgroundColor:'purple'}}>
            purple
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

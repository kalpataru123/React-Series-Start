import { useState ,useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setlength]=useState(8);
  const [numallow,setnumallow]=useState(false);
  const [charallow,setcharallow]=useState(false);
  const [password,setpassword]=useState("");

  const passwordRef=useRef(null)

  const passwordcopytoclipboard=useCallback(()=>{
    window.navigator.clipboard.writeText(password)
  },
  [password]);

  const passowrdGenerator= useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numallow) str+="0123456789";
    if(charallow) str+="~!@#$%^&*(){}|\?/<>][-=+"

    for (let i = 1; i <=length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
      
    }

    setpassword(pass);
  },
  [length,numallow,charallow,setpassword]);

  useEffect(()=>{
    passowrdGenerator();
  },[length,numallow,charallow,passowrdGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-xl px-6 my-8  text-orange-400 bg-gray-800'>
        <h1 className='text-white text-center mb-4 pt-3 text-xl'>Password Generator</h1>
        <div className='flex shadow rounded-xl overflow-hidden mb-4'>
          <input
           type="text" 
           value={password}
           className=' outline-none w-full px-1 py-2 bg-white text-black font-bold'
           placeholder='Password'
           readOnly
           ref={passwordRef}
          />
          <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 cursor-pointer'
          onClick={passwordcopytoclipboard}>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2 pb-6'>
          <div className='flex items-center gap-x-2'>
            <input 
             type="range"
             min={6}
             max={100}
             value={length}
             className='cursor-pointer'
             onChange={(e)=>{setlength(e.target.value)}}
            />
            <label>Lenght:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
             type="checkbox"
             defaultChecked={numallow}
             className='cursor-pointer'
             onChange={(e)=>{setnumallow((prev)=>!prev)}}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
             type="checkbox"
             defaultChecked={charallow}
             className='cursor-pointer'
             onChange={(e)=>{setcharallow((prev)=>!prev)}}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

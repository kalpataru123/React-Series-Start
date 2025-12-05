import { useState } from "react"
import Hello from "./Hello"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>learning react series</h1>
      <Hello/>
    </>
  )
}

export default App

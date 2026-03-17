import { useState, MouseEvent } from "react"
import Button from "./components/Button/Button"
import Input from "./components/Input/Input"

function App() {
  const [counter, setCounter] = useState<number>(0)

  const addCounter = (e: MouseEvent) => {
    setCounter(prev => prev + 1)
    console.log(counter, e)
  }

  return (
    <>
      <Button onClick={addCounter}>Кнопка</Button>
      <Input placeholder={"Email"} />
    </>
  )
}

export default App

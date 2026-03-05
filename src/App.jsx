import Button from "./components/Button/Button"
import Heading from "./components/Heading/Heading"
import Paragraph from './components/Paragraph/Paragraph'

function App() {

  return (
    <>
      <Heading title={"Поход в горы"} />
      <Button text={"Сохранить"} />
      <Paragraph text={"Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем."} />
    </>
  )
}

export default App

import CardList from "./components/CardList/CardList"
import Heading from "./components/Heading/Heading"
import Header from "./components/layout/Header/Header"
import Paragraph from './components/Paragraph/Paragraph'
import SearchBlock from "./components/Search/SearchBlock"

function App() {

  return (
    <>
      <Header />
      <Heading title={"Поход в горы"} />
      <SearchBlock />
      <Paragraph text={"Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем."} />
      <CardList />
    </>
  )
}

export default App

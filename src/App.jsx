import Auth from "./components/Auth/Auth"
import CardList from "./components/CardList/CardList"
import Heading from "./components/Heading/Heading"
import Header from "./components/layout/Header/Header"
import Paragraph from './components/Paragraph/Paragraph'
import SearchBlock from "./components/Search/SearchBlock"
import { UserContextProvider } from "./context/UserContext/UserContextProvider"

function App() {

  return (
    <UserContextProvider>
      <Header />
      <Auth />
      {/* <Heading title={"Поход в горы"} />
      <SearchBlock />
      <Paragraph text={"Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем."} />
      <CardList /> */}
    </UserContextProvider>
  )
}

export default App

import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from "./components/Main/Main.jsx";

const App = () => {
  return (
    <div class="content-wrapper">
      <Header />

      <Main/>

      <Footer />
    </div>
  )
}

export default App

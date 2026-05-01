import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from "./components/Services/Services.jsx";
import { Outlet } from 'react-router-dom';
import LanguageProvider from "./store/languge-context.jsx";

const App = () => {
  return (
    <LanguageProvider>
      <div class="content-wrapper">
        <Header />

        <Outlet/>

          <Footer />
        </div>
    </LanguageProvider>
  )
}

export default App

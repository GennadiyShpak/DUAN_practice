import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from "./components/Services/Services.jsx";
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div class="content-wrapper">
      <Header />

      <Outlet/>

      <Footer />
    </div>
  )
}

export default App

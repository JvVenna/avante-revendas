import './components/assets/css/App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
// import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App

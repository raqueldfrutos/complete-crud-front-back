import { Route, Routes } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import HomePage from './pages/HomePage'
import CarDetail from './pages/CarDetail'
import NavBar from './components/NavBar'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:id' element={<CarDetail />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </>
  )
}

export default App

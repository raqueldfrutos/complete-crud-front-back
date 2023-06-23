import { Route, Routes } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import HomePage from './pages/HomePage'
import CarDetail from './pages/CarDetail'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:id' element={<CarDetail />} />
      </Routes>
    </>
  )
}

export default App

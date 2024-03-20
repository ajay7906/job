
import './App.css'
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/register/Register'
import Login from './pages/login/Login'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login'  element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

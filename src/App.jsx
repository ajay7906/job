
import './App.css'
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import JobPostPage from './pages/addjobs/JobPostPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <ToastContainer 
        theme='dark'
        transition:Bounce
      
        />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login'  element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/addjob' element={<JobPostPage/>}/>
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

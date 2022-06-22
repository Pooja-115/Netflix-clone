import './App.css'

import NavbarMenu from './Component/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Component/Home/Home.js'
import Login from './Component/Login/Login'
import Register from './Component/Register/Register'

function App () {
  return (
    <div>
      <NavbarMenu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        {/* <Route path='expenses' element={<Expenses />} />
        <Route path='invoices' element={<Invoices />} /> */}
      </Routes>
    </div>
  )
}

export default App

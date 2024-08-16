import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Categorias from './pages/categorias/Categorias'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div className='min-h-[70vh]'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/categorias" element={<Categorias/>} />
      </Routes>
      </div>
    </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App

import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListaCategorias from './components/categorias/listaCategorias/ListarCategoria'
import FormularioCategorias from './components/categorias/criaCategoria/formCategoria'
import DeletarCategoria from './components/categorias/deletarCategoria/deletarCategoria'


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div className='min-h-[70vh]'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/formCategoria" element={<FormularioCategorias />} />
            <Route path="/deletarCategorias/:id" element={<DeletarCategoria />} />
            <Route path="/editarCategorias/:id" element={<FormularioCategorias />}/>
      </Routes>
      </div>
    </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App

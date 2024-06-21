import { Outlet } from 'react-router'
import './App.css'
import {Route, Routes, BrowserRouter} from "react-router-dom";
import DescobrindoTalentos from './componentes/DescobrindoTalento/DescobrindoTalentos.tsx'
import HeaderEmpressa from './componentes/HeaderEmpressa/HeaderEmpressa'
import CadastroEmpresa from './pages/CadastroEmpresa/CadastroEmpresa.tsx'
import CadastroPessoa from "./pages/CadastroPessoa/CadastroPessoa.tsx"
import BancoTalento from "./pages/BancoTalento/bancoTalento.tsx"
import Login from './pages/Login/Login'
import EscolhaCaminho from './componentes/escolhaCaminho/EscolhaCaminho.tsx'
import Home from "./pages/LandPage/Home.tsx"
// import Jogos from './jogos/jogos'

function App() {

  return (
    <>
    <BrowserRouter>
      <div className='container'>
      <Routes> 
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Login />} />
        <Route path='/talentos' element={<BancoTalento />} />
        <Route path='/cadastropessoa' element={<CadastroPessoa />} />
        <Route path='/cadastrorec' element={<CadastroEmpresa />} />
        <Route path='/empresa' element={<DescobrindoTalentos/>} />
      
        </Routes>

      </div>
      </BrowserRouter>
    </>
  )
}

export default App

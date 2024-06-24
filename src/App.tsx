
import { Outlet } from 'react-router'
// import './App.css'

import {Route, Routes, BrowserRouter} from "react-router-dom";
import DescobrindoTalentos from './componentes/DescobrindoTalento/DescobrindoTalentos.tsx'
import HeaderEmpressa from './componentes/HeaderEmpressa/HeaderEmpressa'
import CadastroEmpresa from './pages/CadastroEmpresa/CadastroEmpresa.tsx'
import CadastroPessoa from "./pages/CadastroPessoa/CadastroPessoa.tsx"
import BuscaVaga from './pages/BuscaVaga/BuscaVaga.tsx';
import Login from './pages/Login/Login'
import Home from "./pages/LandPage/Home.tsx"
import Cursos from './componentes/Cursos/Cursos.tsx';
import BancoTalento from './pages/BancoTalento/bancoTalento.tsx';
// import Jogos from './jogos/jogos'

function App() {

  return (
    <>

    <BrowserRouter>
  
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cursos' element={<Cursos />} />
        <Route path='/vagas' element={<BuscaVaga />} />
        <Route path='/talentos' element={<BancoTalento/>} />
        <Route path='/cadastropessoa' element={<CadastroPessoa />} />
        <Route path='/cadastrorec' element={<CadastroEmpresa />} />
        <Route path='/empresa' element={<DescobrindoTalentos/>} />
      
        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App

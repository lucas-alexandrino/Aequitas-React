
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


import Pagamento1 from './componentes/Pagamento1/Pagamento1.tsx';
import Pagamento2 from './componentes/Pagamento2/Pagamento2.tsx';
import Pagamento3 from './componentes/Pagamento3/Pagamento3.tsx';

import PerfilUsuario from './pages/PerfilUsuario/PerfilUsuario.tsx';
import AnunciarVagas from './pages/AnunciarVagas/AnunciarVagas.tsx';


// import Jogos from './jogos/jogos'

function App() {

  return (
    <>
    <Outlet/>
    </>
  )
}

export default App

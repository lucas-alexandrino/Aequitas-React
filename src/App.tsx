import { Outlet } from 'react-router'
import './App.css'
import HeaderEmpressa from './componentes/HeaderEmpressa/HeaderEmpressa'
import CadastroEmpresa from './pages/CadastroEmpresa/CadastroEmpresa'
import CadastroPessoa from "./pages/CadastroPessoa/CadastroPessoa"
import Login from './pages/Login/Login'

function App() {

  return (
    <>
    <Outlet/>
    </>
  )
}

export default App

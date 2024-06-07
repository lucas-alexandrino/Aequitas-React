import './App.css'
import HeaderEmpressa from './componentes/HeaderEmpressa/HeaderEmpressa'
import CadastroEmpresa from './pages/CadastroEmpresa/CadastroEmpresa'
import CadastroPessoa from "./pages/CadastroPessoa/CadastroPessoa"
import Login from './pages/Login/Login'

function App() {

  return (
    <>
      <div className='container'>
        <CadastroEmpresa/>
      </div>
    </>
  )
}

export default App

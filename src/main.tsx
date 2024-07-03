import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BancoTalento from './pages/BancoTalento/bancoTalento.tsx'
import BancoTalento2 from './pages/BancoTalento/bancoTalento2.tsx'
import CadastroEmpresa from './pages/CadastroEmpresa/CadastroEmpresa.tsx'
import CadastroPessoa from './pages/CadastroPessoa/CadastroPessoa.tsx'
import Login from './pages/Login/Login.tsx'
import Home from './pages/LandPage/Home.tsx'
import DescobrindoTalentos from './componentes/DescobrindoTalento/DescobrindoTalentos.tsx'
import PaginaErro from './pages/PaginaErro/PaginaErro.tsx'
import Cursos from './componentes/Cursos/Cursos.tsx'
import BuscaVaga from './pages/BuscaVaga/BuscaVaga.tsx'
import Pagamentos1 from './componentes/Pagamento1/Pagamento1.tsx'
import Pagamento2 from './componentes/Pagamento2/Pagamento2.tsx'
import Pagamento3 from './componentes/Pagamento3/Pagamento3.tsx'
import PerfilUsuario from './pages/PerfilUsuario/PerfilUsuario.tsx'
import AnunciarVagas from './pages/AnunciarVagas/AnunciarVagas.tsx'

import Curriculo from './componentes//Curriculos/Curriculos.tsx'
import QuemSomos from './pages/QuemSomos/QuemSomos.tsx'


// const rootElement = document.getElementById("root") as HTMLElement;

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <PaginaErro/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"cadastroEmpresa",
        element: <CadastroEmpresa/>
      },
      {
        path:"login",
        element: <Login/>
      },
      {
        path:"cadastroPessoa",
        element: <CadastroPessoa/>
      },
      {
        path:"cursos",
        element: <Cursos/>
      },
      {
        path:"vagas",
        element: <BuscaVaga/>
      },
      {
        path:"talentos",
        element: <BancoTalento/>
      },
      {
        path:"talentos2",
        element: <BancoTalento2 />
      },
      {
        path:"empresa",
        element: <DescobrindoTalentos/>
      },
      {
        path:"pagamento",
        element: <Pagamentos1/>
      },
      {

        path:"pagamento2",
        element: <Pagamento2/>
      },
      {
        path:"pagamento3",
        element: <Pagamento3/>
      },
      {
        path:"perfilUsuario",
        element: <PerfilUsuario/>
      },
      {
        path:"anunciar",
        element: <AnunciarVagas/>
      },

      {
        path:"cursos",
        element: <Cursos/>
      },
      {
        path:"curriculo",
        element: <Curriculo/>
      },
      {
        path:"sobre",
        element: <QuemSomos/>
      },

    ]
  },
  ])
  
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>,
  )

// const root = ReactDOM.createRoot(rootElement);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

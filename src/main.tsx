import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CadastroEmpresa from './pages/CadastroEmpresa/CadastroEmpresa.tsx'
import CadastroPessoa from './pages/CadastroPessoa/CadastroPessoa.tsx'
import Login from './pages/Login/Login.tsx'
import Home from './pages/LandPage/Home.tsx'
import PaginaErro from './pages/PaginaErro/PaginaErro.tsx'


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
  ]
},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

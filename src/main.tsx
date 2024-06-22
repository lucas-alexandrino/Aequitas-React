import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BancoTalento from './pages/BancoTalento/bancoTalento.tsx'
import CadastroEmpresa from './pages/CadastroEmpresa/CadastroEmpresa.tsx'
import CadastroPessoa from './pages/CadastroPessoa/CadastroPessoa.tsx'
import Login from './pages/Login/Login.tsx'
import Home from './pages/LandPage/Home.tsx'
const router = createBrowserRouter([
{
  path:"/",
  element: <BancoTalento/>
},
{
  path:"cadastroEmpresa",
  element: <CadastroEmpresa/>
},
{
  path:"Login",
  element: <Login/>
},
{
  path:"cadastroPessoa",
  element: <CadastroPessoa/>
},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

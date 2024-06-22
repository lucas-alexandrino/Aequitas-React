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

import DescobrindoTalentos from './componentes/DescobrindoTalento/DescobrindoTalentos.tsx'


const rootElement = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

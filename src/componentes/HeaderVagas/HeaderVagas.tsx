import React from "react";
import { useState } from "react";
import "./HeaderVagas.css"
import "../perfil/Perfil.css";
import { FaBell, FaTrash } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { GoGear, GoSearch } from "react-icons/go";
import { BiHome } from "react-icons/bi";
import { FaListCheck } from "react-icons/fa6";
import { GiPadlock } from "react-icons/gi";
import { ImExit } from "react-icons/im";
import { IoDocumentText } from "react-icons/io5";
import { PiClockCounterClockwiseLight } from "react-icons/pi";
import { TbHelpCircleFilled, TbClipboardCheck } from "react-icons/tb";
import { HiMail } from "react-icons/hi";

import { Link, useNavigate } from "react-router-dom";



export default function Header() {
    const [menuAtivo, setMenuAtivo] = useState(false);
    const [perfilAtivo, setPerfilAtivo] = useState(false);

    const navigate = useNavigate();

    const handleDoubleClick = () => {
        navigate("/");
    };



    // Função para colocar e remover painel lateral
    const ocultarPainelLateral = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = event.target as HTMLElement;
        if (perfilAtivo && !target.closest('.painelLateral') && !target.closest('.menuHamburguer')) {
            setPerfilAtivo(false);
        }
    };

    return (
        <>
            { }
            <div onClick={ocultarPainelLateral} className="app">
                <div className="headerVagaContainer">

                    <h1 className="logoHeaderPessoa logoUm" onDoubleClick={handleDoubleClick}>

                        ÆQUITAS
                    </h1>
                    <h1 className="logoHeaderPessoa logoDois">
                        Æ
                    </h1>
                    <div className="pesquisa">
                        <div className="campo">
                            <GoSearch />
                            <input type="text" placeholder="Digite um cargo ou empresa"></input>
                        </div>

                        <div className="campo1">

                            <input type="text" placeholder="Digite uma cidade ou estado"></input>
                            <button> Buscar Vagas</button>
                        </div>
                    </div>


                    <div className="conteudoPessoa">
                        <button><FaBell size="30px" color="#fff" /></button>
                        <img src="../src/images/Fotousuario.png" alt="foto" ></img>
                        <p className="nomeUsuario">Maria Marques</p>
                        <div className={`menuHamburguer ${menuAtivo ? 'ativo' : ''}`} onClick={() => { setPerfilAtivo(!perfilAtivo); }}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>


                </div>
                <div className="titulos">
                    <h1 className="tituloVagas"> Vagas que podem te interessar</h1>
                    <h5 className="maisVagas"> <a href="null">Veja mais vagas</a> </h5>
                </div>


                <div className={`painelLateral ${perfilAtivo ? 'ativo' : ''}`}>

                    <div className="header-perfil">
                        <img id="foto-perfil" src="../src/images/Fotousuario.png" alt="foto" ></img>
                        <div className="perfil">
                            <h4> Maria Marques</h4>
                            <p>maria.marques@gmail.com</p>
                        </div>

                    </div>
                    <div className="todo-perfil">
                        <div className="body-perfil">

                            <h4><Link to='/perfilusuario'><span className="icon-margin"><BiHome size={25} /></span>Meu Perfil </Link></h4>

                            <h4><Link to='/curriculo'><span className="icon-margin"><IoDocumentText size={25} /></span> Meu currículo</Link></h4>
                            <h4><Link to='/vagas'><span className="icon-margin"><PiClockCounterClockwiseLight size={25} /></span>Minhas vagas</Link></h4>

                            <h4><a href="#alerta-vagas"> <span className="icon-margin"><HiMail size={25} /></span>Alerta de Vagas</a></h4>

                        </div>
                        <div className="config-opcoes">
                            <h4><a href="#configuracoes">  <span className="icon-margin"><GoGear size={25} /></span>Configurações</a></h4>
                            <h4><a href="#alterar-senha"><span className="icon-margin"><GiPadlock size={25} /></span>  Alterar senha</a></h4>
                            <h4><a href="#excluir-conta">  <span className="icon-margin"><FaTrash size={25} /></span> Excluir conta</a></h4>

                        </div>
                        <div className="ajuda-opcoes">

                            <h4><Link to='/#contato'><span className="icon-margin"><TbHelpCircleFilled size={25} /></span>Central de Ajuda</Link></h4>

                            <h4><a href="#termo-uso">  <span className="icon-margin"><TbClipboardCheck size={25} /></span>Termo de Uso</a></h4>
                            <h4><a href="#politica-privacidade"> <span className="icon-margin"><FaListCheck size={25} /></span> Política de Privacidade</a></h4>
                        </div>

                            <h3><Link to='/login'> <span className="icon-margin"><ImExit size={20} /></span>Encerrar sessão</Link> </h3>

                        </div>
                    </div>
                </div>

           

        </>
    );
}
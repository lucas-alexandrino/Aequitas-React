import "./HeaderRecrutador.css"
import '../perfil/Perfil.css'

import { FiMenu } from "react-icons/fi";
import AELogo from "../../images/breno.png"
import { useState } from "react";
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
import { Link } from "react-router-dom";

export default function HeaderBanco() {

    const [perfilAtivo, setPerfilAtivo] = useState(false);


    // Função para colocar e remover painel lateral
    const ocultarPainelLateral = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = event.target as HTMLElement;
        if (perfilAtivo && !target.closest('.painelRecrutador') && !target.closest('.menuHamburguer')) {
            setPerfilAtivo(false);
        }
    };

    return (
        <>
            { }


            <div onClick={ocultarPainelLateral} className="app">
                <div className="headerBancoContainer">
                    <Link to="/empresa">
                        <h1 className="nome">
                            ÆQUITAS
                        </h1>
                    </Link>
                    <div className="forBusiness">
                        <h6 className="nome2">
                            For Business
                        </h6>
                    </div>
                    <div className="menubar">
                        <li className="planos">Planos</li>
                        <li className="pginicial">Pagina Inicial</li>
                        <li><button className="notifi"><FaBell size="25px" /></button></li>
                        <img className="AELogo" src={AELogo} alt="Logo empresa" width={70} height={40} />
                        <li className="nomeEmpresa">Breno Jones</li>
                        <button className="menubutton" onClick={() => { setPerfilAtivo(!perfilAtivo); }}><FiMenu size="25px" /></button>
                    </div>
                </div>

                <div className={`painelRecrutador  ${perfilAtivo ? 'ativo' : ''}`} >

                    <div className="header-perfil" >
                        <img className="AELogo" src="../src/images/breno.png" alt="foto" ></img>
                        <div className="perfil">
                            <h4> Breno Jones</h4>
                            <p>breno.jones@gmail.com</p>
                        </div>

                    </div>
                    <div className="todo-perfil">
                        <div className="body-perfil">

                            <h4><a href="#meu-perfil"> <span className="icon-margin"><BiHome size={25} /></span>Meu Perfil</a></h4>
                            <h4><a href="#meu-curriculo"> <span className="icon-margin"><IoDocumentText size={25} /></span> Currículos em aberto</a></h4>
                            <h4><a href="#minhas-vagas"><span className="icon-margin"><PiClockCounterClockwiseLight size={25} /></span>Vagas Adicionadas</a></h4>
                            <h4><a href="#alerta-vagas"> <span className="icon-margin"><HiMail size={25} /></span>Alerta de Currículos</a></h4>

                        </div>
                        <div className="config-opcoes">
                            <h4><a href="#configuracoes">  <span className="icon-margin"><GoGear size={25} /></span>Configurações</a></h4>
                            <h4><a href="#alterar-senha"><span className="icon-margin"><GiPadlock size={25} /></span>  Alterar senha</a></h4>
                            <h4><a href="#excluir-conta">  <span className="icon-margin"><FaTrash size={25} /></span> Excluir conta</a></h4>

                        </div>
                        <div className="ajuda-opcoes">
                            <h4><a href="#central-ajuda"> <span className="icon-margin"><TbHelpCircleFilled size={25} /></span>Central de Ajuda</a></h4>
                            <h4><a href="#termo-uso">  <span className="icon-margin"><TbClipboardCheck size={25} /></span>Termo de Uso</a></h4>
                            <h4><a href="#politica-privacidade"> <span className="icon-margin"><FaListCheck size={25} /></span> Política de Privacidade</a></h4>
                        </div>
                        <div className="encerrar-sessao">
                            <h3><a href="/login">  <span className="icon-margin"><ImExit size={20} /></span>Encerrar sessão</a></h3>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}
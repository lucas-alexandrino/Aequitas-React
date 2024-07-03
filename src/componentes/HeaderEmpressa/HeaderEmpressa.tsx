import { useState } from "react";
import "./headerEmpressa.css";
import "../perfil/Perfil.css";

import { FaBell, FaTrash } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { BiHome } from "react-icons/bi";
import { FaListCheck } from "react-icons/fa6";
import { GiPadlock } from "react-icons/gi";
import { ImExit } from "react-icons/im";
import { IoDocumentText } from "react-icons/io5";
import { PiClockCounterClockwiseLight } from "react-icons/pi";
import { TbHelpCircleFilled, TbClipboardCheck } from "react-icons/tb";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

interface HeaderEmpresaProps {
    login: boolean;
}

export default function HeaderEmpressa(props: HeaderEmpresaProps) {
    /* const [menuAtivo, setMenuAtivo] = useState(false);  ${menuAtivo ? 'ativo' : ''}*/
    const [login] = useState(props.login); // Utilizando props.login diretamente
    const [perfilAtivo, setPerfilAtivo] = useState(false);

    const ocultarPainelLateral = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = event.target as HTMLElement;
        if (perfilAtivo && !target.closest('.painelRecrutador') && !target.closest('.menuHamburguer')) {
            setPerfilAtivo(false);
        }
    };

    return (
        <>
            <div onClick={ocultarPainelLateral} className="app">
                {
                    login ?
                        <div className="headerEmpressaContainer logada">
                            <h1 className="logoHeaderEmpressa logoUm">
                                ÆQUITAS
                            </h1>
                            <h1 className="logoHeaderEmpressa logoDois">
                                Æ
                            </h1>
                            <p className="business">
                                For Business
                            </p>
                            <nav>
                                <ul>
                                    <li><a href="#">Publicar Vagas</a></li>
                                    <li><a href="/pagamento">Planos</a></li>
                                    <li><a href="/talentos">Encontrar Candidatos</a></li>
                                </ul>
                            </nav>
                            <div className="conteudoEmpressa">
                                <button><FaBell size="30px" color="rgb(250, 250, 250)"/></button>
                                <img src="../src/images/breno.png" alt="Persona" />
                                <p className="nomeUsuario">Breno Jones</p>
                                <div className={`menuHamburguer `} onClick={() => { setPerfilAtivo(!perfilAtivo); }}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="headerEmpressaContainer">
                            <h1 className="logoHeaderEmpressa logoUm">
                                ÆQUITAS
                            </h1>
                            <h1 className="logoHeaderEmpressa logoDois">
                                Æ
                            </h1>
                            <p className="business">
                                For Business
                            </p>

                            <p className="escritaHeaderEmpressa">
                                já usa Æquitas?<Link to="/login">Login</Link>
                            </p>
                        </div>
                }

                <div className={`painelRecrutador ${perfilAtivo ? 'ativo' : ''}`}>

                    <div className="header-perfil">
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
                            <h4><Link to='/talentos'><span className="icon-margin"><PiClockCounterClockwiseLight size={25} /></span>Vagas Adicionadas</Link></h4>
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
                        <h3><Link to='/login'> <span className="icon-margin"><ImExit size={20} /></span>Encerrar sessão</Link> </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
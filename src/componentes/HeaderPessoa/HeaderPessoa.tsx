import React, { useState } from "react";
import "./headerPessoa.css";
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
import { Link, useNavigate } from "react-router-dom";
import maria from "../../images/Fotousuario.png"

interface HeaderPessoaProps {
    login: boolean;
}

export default function HeaderPessoa(props: HeaderPessoaProps) {
    /* const [menuAtivo, setMenuAtivo] = useState(false); ${menuAtivo ? 'ativo' : ''} */
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
            <div onClick={ocultarPainelLateral} className="app">
                {
                    props.login ?
                        <div className="headerPessoaContainer logada">
                        <h1 className="logoHeaderPessoa logoUm" onDoubleClick={handleDoubleClick}>
                                ÆQUITAS
                            </h1>
                            <h1 className="logoHeaderPessoa logoDois">
                                Æ
                            </h1>
                            <div className="conteudoPessoa">
                                <button><FaBell size="30px" color="white" /></button>
                                <img src={maria} alt="Persona" />
                                <p className="nomeUsuario">Maria Marques</p>
                                <div className={`menuHamburguer `} onClick={() => { setPerfilAtivo(!perfilAtivo); }}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                            </div>
                        </div>
                        :
                        <div className="headerPessoaContainer">
                            <h1 className="logoHeaderPessoa logoUm" onDoubleClick={handleDoubleClick}>
                                ÆQUITAS
                            </h1>
                            <h1 className="logoHeaderPessoa logoDois">
                                Æ
                            </h1>
                            <p className="escritaHeaderPessoa">
                                já usa Æquitas?<Link to="/login">Login</Link>
                            </p>
                        </div>
                }

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
                        <div className="encerrar-sessao">
                            <h3><Link to='/login'> <span className="icon-margin"><ImExit size={20} /></span>Encerrar sessão</Link> </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
    
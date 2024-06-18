import { useState } from "react";
import Logo from "../../images/Logo.jpeg"
import "./headerEmpressa.css"
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HeaderEmpressa() {
    const [menuAtivo, setMenuAtivo] = useState(false);
    const [login, setLogin] = useState(false);

    return (
        <>
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
                                <li><a href="#">Planos</a></li>
                                <li><a href="#">Encontrar Candidatos</a></li>
                            </ul>
                        </nav>
                        <div className="conteudoEmpressa">
                            <button><FaBell size="30px" color="rgb(250, 250, 250)"/></button>
                            <img src={Logo} alt="Persona" />
                            <p className="nomeUsuario">Samuel Marques</p>
                            <div className={`menuHamburguer ${menuAtivo ? 'ativo' : ''}`} onClick={() => { setMenuAtivo(!menuAtivo); }}>
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
        </>
    );
}
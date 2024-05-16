import { useState } from "react";
import Logo from "../../images/Logo.jpeg"
import "./headerPessoa.css"
import { FaBell } from "react-icons/fa";


export default function HeaderPessoa() {
    const [menuAtivo, setMenuAtivo] = useState(false);
    const [login, setLogin] = useState(true);

    return (
        <>
        {}
            {
                login ?
                    <div className="headerPessoaContainer logada">
                        <h1 className="logoHeaderPessoa logoUm">
                            ÆQUITAS
                        </h1>
                        <h1 className="logoHeaderPessoa logoDois">
                            Æ
                        </h1>
                        <div className="conteudoPessoa">
                            <button><FaBell size="30px" /></button>
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
                    <div className="headerPessoaContainer">
                        <h1 className="logoHeaderPessoa logoUm">
                            ÆQUITAS
                        </h1>
                        <h1 className="logoHeaderPessoa logoDois">
                            Æ
                        </h1>
                        <p className="escritaHeaderPessoa">
                            já usa Æquitas?<a href="#">Login</a>
                        </p>
                    </div>
            }
        </>
    );
}
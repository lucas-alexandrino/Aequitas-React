import { FcGoogle } from "react-icons/fc";
import {  useState } from 'react';
import { IoLogoLinkedin } from "react-icons/io";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import './style.css'

export default function LoginCard(){
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    return(
        <>
            <div className="containerLoginCard">
                <h1 className="logo">
                    ÆQUITAS
                </h1>
                <p className="cinza tm">
                    Acesso para usúarios 
                </p>
                <button className="botao" id="google">
                    <FcGoogle />
                    <p>Google</p>
                </button>
                <button className="botao" id="linkedin">
                    <IoLogoLinkedin color="rgba(0, 119, 181, 1)"/>
                    <p>Linkedin</p>
                </button>
                <p className="cinza tm">ou insira seu email</p>
                <form id="cadastro">
                    <input type="email" placeholder="E-mail" className="dados" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type={mostrarSenha ? "text" : "password"} placeholder="Senha" className="dados" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    <button className="visibilidadeSenha" type="button" onClick={() => setMostrarSenha(!mostrarSenha)}>
                        {mostrarSenha ? <MdOutlineVisibilityOff/> : <MdOutlineVisibility/>}
                    </button>
                    <button type="submit" id="enviar">Continuar</button>
                </form>
                <b><p className="tm">Você é novo no Æquitas?</p></b>
                <p className="tm">Cadastrar-se como <a href="#">Candidato</a> ou <a href="##">Empresa</a></p>
            </div>
        </>
    )
    
}

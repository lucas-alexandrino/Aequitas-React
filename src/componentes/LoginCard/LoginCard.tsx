import { FcGoogle } from "react-icons/fc";
import {  useState } from 'react';
import { IoLogoLinkedin } from "react-icons/io";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import './style.css'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod"; 
import { zodResolver } from "@hookform/resolvers/zod"

type LoginDados = z.infer <typeof LoginEsquema>

const LoginEsquema = z.object({
    email: z.string()
    .nonempty("O campo email não pode ficar vazio")
    .email("Adicione um email"),
    senha: z.string()
    .nonempty("O campo senha não pode ficar vazio"),
});
export default function LoginCard(){
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<LoginDados>({
        resolver : zodResolver(LoginEsquema),
    });

    function login(dados : any){
        console.log(dados);
    }
    return(
        <>
            <div className="containerLoginCard">
            <Link to="/">
                <h1 className="logo">
                    ÆQUITAS
                </h1>
                </Link>
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
                <form id="cadastro" onSubmit={handleSubmit(login)}>
                    {errors.email && <span>{errors.email.message}</span>}
                    <input type="email" placeholder="E-mail" className="dados" id="email" {...register("email")}/>
                    {errors.senha && <span>{errors.senha.message}</span>}
                    <input type={mostrarSenha ? "text" : "password"} placeholder="Senha" className="dados" id="senha" {...register("senha")}/>
                    <button className="visibilidadeSenha" type="button" onClick={() => setMostrarSenha(!mostrarSenha)}>
                        {mostrarSenha && <MdOutlineVisibilityOff/>}
                        {!mostrarSenha && <MdOutlineVisibility/>}
                    </button>
                    <button type="submit" id="enviar">Continuar</button>
                </form>
                <b><p className="tm">Você é novo no Æquitas?</p></b>
                <p className="tm">Cadastrar-se como <Link to="/cadastroPessoa">Candidato</Link> ou <Link to="/cadastroEmpresa">Empresa</Link></p>
            </div>
        </>
    )
    
}

import HeaderPessoa from "../../componentes/HeaderPessoa/HeaderPessoa"
import "./cadastroPessoa.css"
export default function CadastroPessoa(){
    return(
        <>
            <div className="containercadastroPessoa">
            <HeaderPessoa/>
            <div className="formulario">
                <form>
                <input type="text" placeholder="Nome Completo"/>
                <input type="text" placeholder="E-mail"/>
                <input type="text" placeholder="Telefone Celular"/>
                <input type="text" placeholder="Cep"/>
                <input type="text" placeholder="Senha"/>
                <input type="text" placeholder="Repita sua Senha"/>
                <input type="checkbox"/>
                <label>Li e aceito as <a href="#">Condições Legais</a> e a <a href="#">Política de Privacidade</a></label>
                <input type="checkbox"/>
                <label>Autorizo o ÆQUITAS a enviar comunicações comerciais sobre produtos, serviços e eventos dos seus parceiros e colaboradores</label>
                <button type="submit">Cadastrar-se</button>
                </form>
                <p>Você é uma empresa? <a href="#">Cadastre-se aqui</a></p>
            </div>
            <div className="redes">

            </div>
            <div className="imagem">

            </div>
            </div>
            
        </>
    )
}
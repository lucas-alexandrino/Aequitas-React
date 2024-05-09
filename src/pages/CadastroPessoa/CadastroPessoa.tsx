import { useState } from "react";
import HeaderPessoa from "../../componentes/HeaderPessoa/HeaderPessoa"
import "./cadastroPessoa.css"
import { FcGoogle } from "react-icons/fc";
import Diversidade from "../../images/Diversidade.png"
import { IoLogoLinkedin } from "react-icons/io";
export default function CadastroPessoa(){
    const [telefone,setTelefone] = useState("");
    const [cep,setCep] = useState("");
    const [senha,setSenha] = useState("");
    const [senhaRepetir,setSenhaRepetir] = useState("");
    return(
        <>
            <HeaderPessoa/>
            <div className="containercadastroPessoa">
            
            <div className="formularioCadastroPessoa">
                <form>
                <input type="text"  maxLength={145} placeholder="Nome Completo"/>
                <input type="email" placeholder="E-mail"/>
                <input type="text" value={telefone} placeholder="Telefone Celular" maxLength={14} onChange={(e) =>{
                    const inputValue = e.target.value;
                    const numericValue = inputValue.replace(/\D/g, '');
                    setTelefone(numericValue);
                    let newValue = inputValue;
                    if (inputValue.length == 11 ) {
                    newValue = inputValue.substring(0,0) + "(" + inputValue.substring(0,2) + ")" + inputValue.substring(2,7) + "-" + inputValue.substring(7) ;
                    setTelefone(newValue)
    }
                }}/>
                <input type="text" placeholder="Cep" value={cep} maxLength={9} onChange={(e) =>{
                    const inputValue = e.target.value;
                    const numericValue = inputValue.replace(/\D/g, '');
                    setCep(numericValue);
                    let newValue = inputValue;
                    if (inputValue.length == 8 && e.nativeEvent.inputType !== "deleteContentBackward") {
                    newValue = inputValue.substring(0,5) + "-" + inputValue.substring(5);
                    setCep(newValue)
    }
                }}/>
                
                <input type="text" placeholder="Senha" value={senha} minLength={8} maxLength={16}  onChange={(e) =>{
                    setSenha(e.target.value);
                }} onBlur={() => {
                    const inputValue = document.getElementById("sa");
                    if(senha.length < 8)
                        inputValue?.classList.toggle("ats");
                    
                }} onFocus={()=>{
                    const inputValue = document.getElementById("sd");
                    if(senha.length < 8)
                    inputValue?.classList.toggle("ats");
                }}/>
                <label id="sda"> kkk</label>
                <input type="text" placeholder="Repita sua Senha"  value={senhaRepetir} minLength={8} maxLength={16} onChange={(e) =>{
                    setSenhaRepetir(e.target.value);
                }} onBlur={() => {
                    const inputValue = document.getElementById("sda");
                    if(senha !== senhaRepetir)
                        inputValue?.classList.toggle("ats");
                }} onFocus={()=>{
                    const inputValue = document.getElementById("sda");
                    if(inputValue?.classList.contains("ats"))
                        inputValue?.classList.toggle("ats");
                }}/>
                <input type="checkbox"/>
                <label>Li e aceito as <a href="#">Condições Legais</a> e a <a href="#">Política de Privacidade</a></label>
                <input type="checkbox"/>
                <label>Autorizo o ÆQUITAS a enviar comunicações comerciais sobre produtos, serviços e eventos dos seus parceiros e colaboradores</label>
                <button type="submit">Cadastrar-se</button>
                </form>
                <p>Você é uma empresa? <a href="#">Cadastre-se aqui</a></p>
            </div>
            <div className="formularioCadastroPessoa">
            <div className="redes">
                <h2>Dê o próximo salto na sua carreira aqui!</h2>
                <p>Entre e comece a se candidatar</p>
                <button>
                <FcGoogle />
                <p>Google</p>
                </button>
                <button>
                <IoLogoLinkedin color="rgba(0, 119, 181, 1)"/>
                <p>Linkedin</p>
                </button>
            </div>
            <div className="imagem">
                <img src={Diversidade} alt="Pessoas diversas" />
            </div>
            </div>
            </div>
        </>
    )
}
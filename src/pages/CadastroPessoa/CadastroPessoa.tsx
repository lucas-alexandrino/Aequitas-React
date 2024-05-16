import { useState } from "react";
import HeaderPessoa from "../../componentes/HeaderPessoa/HeaderPessoa"
import "./cadastroPessoa.css"
import { FcGoogle } from "react-icons/fc";
import diversidade from "../../images/Diversidade.png"
import { IoLogoLinkedin } from "react-icons/io";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
export default function CadastroPessoa() {
    const [telefone, setTelefone] = useState("");
    const [cep, setCep] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaRepetir, setSenhaRepetir] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);
    return (
        <>
            <div className="containercadastroPessoa">
                <HeaderPessoa />
                <div className="formularioCadastroPessoa">
                    <form>
                        <div className="juncaoLabel">
                            <label id="campoNome" className="valorErrado">&#42;A senha deve ter 8 caractere</label>
                            <input type="text" maxLength={145} placeholder="Nome Completo" className="campoCadastro" />
                        </div>
                        <div className="juncaoLabel">
                            <label id="campoCpf" className="valorErrado">&#42; As senhas não são iguais </label>
                            <input type="text" placeholder="CPF" className="campoCadastro" />
                        </div>
                        <div className="juncaoLabel">
                            <label id="campoEmail" className="valorErrado">&#42; As senhas não são iguais </label>
                            <input type="email" placeholder="E-mail" className="campoCadastro" />
                        </div>
                        <div className="juncaoLabel">
                            <label id="campoTelefone" className="valorErrado">&#42; As senhas não são iguais </label>
                            <input type="text" value={telefone} placeholder="Telefone Celular" maxLength={14} className="campoCadastro" onChange={(e) => {
                                const inputValue = e.target.value;
                                const numericValue = inputValue.replace(/\D/g, '');
                                setTelefone(numericValue);
                                let newValue = inputValue;
                                if (inputValue.length == 11) {
                                    newValue = inputValue.substring(0, 0) + "(" + inputValue.substring(0, 2) + ")" + inputValue.substring(2, 7) + "-" + inputValue.substring(7);
                                    setTelefone(newValue)
                                }
                            }} />
                        </div>
                        <div className="juncaoLabel">
                            <label id="campoCep" className="valorErrado">&#42; As senhas não são iguais </label>
                            <input type="text" placeholder="Cep" value={cep} maxLength={9} className="campoCadastro" onChange={(e) => {
                                const inputValue = e.target.value;
                                const numericValue = inputValue.replace(/\D/g, '');
                                setCep(numericValue);
                                let newValue = inputValue;
                                if (inputValue.length == 8 && e.nativeEvent.inputType !== "deleteContentBackward") {
                                    newValue = inputValue.substring(0, 5) + "-" + inputValue.substring(5);
                                    setCep(newValue)
                                }
                            }} />
                        </div>
                        <div className="juncaoLabel">
                            <label id="campoSenha" className="valorErrado">&#42;A senha deve ter 8 caractere</label>
                            <input type={mostrarSenha ? "text" : "password"} placeholder="Senha" value={senha} minLength={8} className="campoCadastro" maxLength={16} onChange={(e) => {
                                setSenha(e.target.value);
                            }} onBlur={() => {
                                const inputValue = document.getElementById("campoSenha");
                                if (senha.length < 8)
                                    inputValue?.classList.toggle("valorErradoAtivo");

                            }} onFocus={() => {
                                const inputValue = document.getElementById("campoSenha");
                                if (inputValue?.classList.contains("valorErradoAtivo"))
                                    inputValue?.classList.toggle("valorErradoAtivo");
                            }} />
                            <button className="visibilidadeSenha" type="button" onClick={() => setMostrarSenha(!mostrarSenha)}>
                                {mostrarSenha ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                            </button>
                        </div>
                        <div className="juncaoLabel">
                            <label id="senhaIgual" className="valorErrado">&#42; As senhas não são iguais </label>
                            <input type={mostrarSenha ? "text" : "password"} placeholder="Repita sua Senha" value={senhaRepetir} minLength={8} className="campoCadastro" maxLength={16} onChange={(e) => {
                                setSenhaRepetir(e.target.value);
                            }} onBlur={() => {
                                const inputValue = document.getElementById("senhaIgual");
                                if (senha !== senhaRepetir)
                                    inputValue?.classList.toggle("valorErradoAtivo");
                            }} onFocus={() => {
                                const inputValue = document.getElementById("senhaIgual");
                                if (inputValue?.classList.contains("valorErradoAtivo"))
                                    inputValue?.classList.toggle("valorErradoAtivo");
                            }} />
                            <button className="visibilidadeSenhaRepetida" type="button" onClick={() => setMostrarSenha(!mostrarSenha)}>
                                {mostrarSenha ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                            </button>
                        </div>
                        <div className="juncaoLabelCheckbox">
                        <input type="checkbox" />
                        <label >Li e aceito as <a href="#">Condições Legais</a> e a <a href="#">Política de Privacidade</a></label>
                        </div>
                        <div className="juncaoLabelCheckbox">
                        <input type="checkbox" />
                        <label> Autorizo o ÆQUITAS a enviar comunicações comerciais sobre produtos, serviços e eventos dos seus parceiros e colaboradores</label>
                        </div>
                        <button type="submit" id="cadastrar">Cadastrar-se</button>
                    </form>
                    <p>Você é uma empresa? <a href="#">Cadastre-se aqui</a></p>
                </div>
                    <div className="redes">
                        <h2>Dê o próximo salto na sua carreira aqui!</h2>
                        <p> Entre e comece a se candidatar</p>
                        <div className="itens">
                            <button >
                                <FcGoogle />
                                <p>Google</p>
                            </button>
                            <button>
                                <IoLogoLinkedin color="rgba(0, 119, 181, 1)" />
                                <p>Linkedin</p>
                            </button>
                        </div>
                    </div>
                    <div className="imagem">
                        <img src={diversidade} alt="Pessoas diversas" />
                    </div>
                    <p className="direitos">&copy;ÆQUITAS Todos os Direitos Reservados</p>
                </div>
            
        </>
    )
}
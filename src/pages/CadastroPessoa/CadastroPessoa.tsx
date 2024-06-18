import HeaderPessoa from "../../componentes/HeaderPessoa/HeaderPessoa"
import "./cadastroPessoa.css"
import { FcGoogle } from "react-icons/fc";
import persona from "../../images/Diversidade.png"
import wave from "../../images/waveCadastro.png"
import { IoLogoLinkedin } from "react-icons/io";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
export default function CadastroPessoa() {
    return (
        <>
            <div className="containerCadastroPessoa">
                <HeaderPessoa />
                <div className="formularioCadastroPessoa">
                    <form>
                        
                        <input  type="text" placeholder="Nome Completo" ></input>
                        <input  type="email" placeholder="E-mail"></input>
                        <input  type="text" placeholder="CPF"></input>
                        <input  type="text" placeholder="Telefone Celular"></input>
                        <div className="juncaoEndereco">
                        <input  type="text" placeholder="CEP"></input>
                        <input  type="number" placeholder="N&ordm;"></input>
                        </div>
                        <div className="juncaoEnderecoDois">
                            <input  type="text" placeholder="CEP"></input>
                            <input  type="number" placeholder="N&ordm;"></input>
                        </div>
                        <input  type="password" placeholder="Senha"></input>
                        <input  type="password" placeholder="Confirmar Senha"></input>
                        <div className="redesPessoa">
                            <h2>Dê o próximo salto na sua carreira aqui!</h2>
                            <p> Entre e comece a se candidatar</p>
                            <div className="itensPessoa">
                                <button type="button">
                                    <FcGoogle size="20px" />
                                    <p>Google</p>
                                </button>
                                <button type="button">
                                    <IoLogoLinkedin color="rgba(0, 119, 181, 1)" size="25px" />
                                    <p>Linkedin</p>
                                </button>
                            </div>
                        </div>
                        <div className="juncaoLabelCheckboxPessoa">
                                <input type="checkbox" />
                                <label >Li e aceito as <a href="#">Condições Legais</a> e a <a href="#">Política de Privacidade</a></label>
                            </div>
                            <div className="juncaoLabelCheckboxPessoa">
                                <input type="checkbox" />
                                <label> Autorizo o ÆQUITAS a enviar comunicações comerciais sobre produtos, serviços e eventos dos seus parceiros e colaboradores</label>
                            </div>
                            <div className="finalFormPessoa">
                            <button type="submit" id="cadastrarPessoa">Cadastrar-se</button>
                            <label>Você é uma empresa? <a href="#">Cadastre-se aqui.</a></label>
                            </div>
                    </form>
                </div>
                <img src={wave} alt="" id="waveCadastroPessoa"/>
                <img src={persona} alt="" id="personaCadastroPessoa"/>
                <p className="direitos">&copy;ÆQUITAS  Todos os direitos reservados.</p>
            </div>
        </>
    )
}
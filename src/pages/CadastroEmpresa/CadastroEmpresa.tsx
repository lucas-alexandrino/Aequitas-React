import HeaderEmpressa from "../../componentes/HeaderEmpressa/HeaderEmpressa";
import { FcGoogle } from "react-icons/fc";
import persona from "../../images/PersonaEmpresa.png"
import wave from "../../images/WaveEmpresa.png"
import { IoLogoLinkedin } from "react-icons/io";
import "./cadastroEmpresa.css";
export default function CadastroEmpresa() {
    return (
        <>
            <div className="containerCadastroEmpresa">
                <HeaderEmpressa />
                <div className="formularioCadastroEmpresa">
                    <form>
                        <input type="text" placeholder="Nome da Empresa" ></input>
                        <input type="text" placeholder="CNPJ da Empresa"></input>
                        <input type="text" placeholder="Telefone Fixo"></input>
                        <input type="email" placeholder="E-mail Corporativo"></input>
                        <input type="password" placeholder="Senha"></input>
                        <input type="password" placeholder="Confirmar Senha"></input>
                        <div className="redesEmpresa">
                            <p className="complementoEmpresa"> ou</p>
                            <div className="itensEmpresa">
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
                        <div className="juncaoLabelCheckboxEmpresa">
                            <input type="checkbox" />
                            <label >Li e aceito as <a href="#">Condições Legais</a> e a <a href="#">Política de Privacidade</a></label>
                        </div>
                        <div className="juncaoLabelCheckboxEmpresa">
                            <input type="checkbox" />
                            <label> Autorizo o ÆQUITAS a enviar comunicações comerciais sobre produtos, serviços e eventos dos seus parceiros e colaboradores</label>
                        </div>
                        <div className="finalFormEmpresa">
                            <button type="submit" id="cadastrarEmpresa">Cadastrar-se</button>
                            <label>Você é candidato? <a href="#">Cadastre-se aqui.</a></label>
                        </div>
                    </form>
                </div>
                <img src={wave} alt="" id="waveCadastroEmpresa" />
                <img src={persona} alt="Mulher cadeirante feliz se inscrevendo no site" id="personaCadastroEmpresa" />
                <p className="direitos">&copy;ÆQUITAS  Todos os direitos reservados.</p>
            </div>
        </>
    )
}
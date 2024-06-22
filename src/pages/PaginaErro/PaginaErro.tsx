import "./paginaErro.css"
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Erro from "../../images/Erro.png";
import { useNavigate } from "react-router";
const PaginaErro = () => {
    const navigate = useNavigate();
    return (
        <>
            <div id="containerErro">
                <div className="headerErro">
                    <h1>ÆQUITAS</h1>
                </div>
                <h2>Oops! Página de férias</h2>
                <p>Esta página decidiu tirar uma folga. Que tal procurar algo novo enquanto ela não volta?</p>
                <button onClick={() => {return navigate("/")}}>Voltar a LandPage</button>
                <img src={Erro} alt="quatro pessoas, carregando o numero do erro 404" />
                <div className="redes">
                    <button><FaFacebookSquare size="30px" color="rgb(26,67,170)"/></button>
                    <button><AiFillInstagram size="30px" color="rgb(26,67,170)"/></button>
                    <button><FaLinkedin size="30px" color="rgb(26,67,170)"/></button>
                    <button><FaXTwitter size="30px" color="rgb(26,67,170)"/></button>
                </div>
                <small><span>&copy;ÆQUITAS todos os direitos reservados</span></small>
            </div>
        </>
    )
}

export default PaginaErro;
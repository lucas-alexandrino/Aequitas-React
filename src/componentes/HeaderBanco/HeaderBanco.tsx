import "./headerBanco.css"
import { FaBell } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import AELogo from "../../images/AELogo.png"
export default function HeaderBanco() {

    return (
        <>
        {}
            {
                <div className="background">

                <div className="headerBancoContainer">
                    <h1 className="nome">
                        ÆQUITAS
                    </h1>
                    <div className="forBusiness">
                    <h6 className="nome2">
                        For Business
                    </h6>
                    </div>
                    <div className="menubar">
                    <li className="planos">Planos</li>
                    <li className="pginicial">Pagina Inicial</li>
                    <li><button><FaBell size="25px" /></button></li>
                    <img className="AELogo" src={AELogo} alt="Logo empresa" width={70} height={40} />
                    <li className="nomeEmpresa">Empresa</li>
                    <button><FiMenu size="25px" /></button>
                </div>
                </div>
                
                </div>
            }
        </>
    );
}
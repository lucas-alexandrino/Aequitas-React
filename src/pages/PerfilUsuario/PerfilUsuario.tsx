import HeaderPessoa from '../../componentes/HeaderPessoa/HeaderPessoa'
import './PerfilUsuario.css'
import foto_usuario from '../../images/Foto usuário.png'
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";
import { IoSchool } from "react-icons/io5";
import Curriculo from '../../componentes/Curriculos/Curriculo.tsx';
import foto_maria from '../../images/fotomaria.png'



export default function PerfilUsuario(){
    return (
    <>
    <HeaderPessoa/>
        <div className='container-perfilusuario'>
           
            <div className='infosusuario'>
                <div className="fotousuario">
                    <img src={foto_maria} alt="" />
                    <h3>Maria Marques</h3>
                </div>
                <div className="dadosusuario">
                    <div className="email">
                    <MdEmail size={30} color='434343'/> <p>mariamarques@mail.com</p>
                    </div>
                    <div className="telefone">
                    <BsFillTelephoneFill size={30} color='434343'/> <p>(11)00000-0000</p>
                    </div>
                    <div className="localizacao">
                    <GrMapLocation size={35} color='434343' /> <p>São Paulo, SP - BR</p>
                    </div>
                </div>
                <div className="situacao-usuario">
                    <div className="inicio-imediato">
                        <h4>Inicio Imediato</h4>
                        <p>Estou disponível para começar imediatamente</p>
                    </div>
                    <h4>Escolaridade</h4>
                    <div className="escolaridade-usuario">
                    <IoSchool  size={32} color='434343'/>
                        <p>Análise e Desenvolvimento de Sistemas</p>
                    </div>
                </div>
            </div>
            <div className="aside">
                <h2>Currículos</h2>
                <div className='curriculos'>
                    <div className="curriculo1">
                    <Curriculo
                    titulo="Currículo AEquitas"
                    /></div>
                    <div className="curriculo2">
                    <Curriculo 
                    titulo="Maria - Currículo.PDF"
                    /></div>
                </div>
            </div>
        
        </div>
    </>
    )

}
import HeaderPessoa from '../../componentes/HeaderPessoa/HeaderPessoa'
import './PerfilUsuario.css'

import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";
import { IoSchool } from "react-icons/io5";

import MiniCurriculo from '../../componentes/MiniCurriculo/MiniCurriculo.tsx';

import foto_maria from '../../images/fotomaria.png'
import { Link } from 'react-router-dom';



export default function PerfilUsuario(){
    return (
    <>
    <HeaderPessoa login={true}/>
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

                  <Link to='/curriculo'> <MiniCurriculo
                    titulo="Currículo AEquitas"
                    /></Link></div>
                    <div className="curriculo2">
                    <MiniCurriculo 

                    titulo="Maria - Currículo.PDF"
                    /></div>
                </div>
            </div>
        
        </div>
    </>
    )

}
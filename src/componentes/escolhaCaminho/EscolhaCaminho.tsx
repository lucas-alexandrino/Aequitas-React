import React, { useState } from "react";
import "./escolherCaminho.css"
import Candidato from "../../images/candidato.png"
import Empresa from "../../images/empresa.png"
import {  useNavigate } from "react-router-dom";

const EscolhaCaminho = React.forwardRef((props : any) =>{
    const [selecionado, setSelecionado] = useState(0);
    const handleChange = (event : any) => {
            setSelecionado(event.target.value);
    }
    const navigate = useNavigate();
    return(
        <>
        
        <div className="escolhaCaminhoContent">
        <button className="fecharCaminho" type="button" onClick={() => {props.fecharPag(false)}}>
                    <span></span>
                    <span></span>
                </button>
            <div className="caminhoContent">
            <input type="radio" name="escolha" className="escolha" value={1} checked={selecionado == 1} onChange={handleChange}/>
            {selecionado == 1 ? 
            <div className="caminho esse">
                <h3>Empresa</h3>
                <img src={Empresa} alt=""/>
            </div>
            :
            <div className="caminho">
                <h3>Empresa</h3>
            <img src={Empresa} alt=""/>
            </div>
            }
            
            <input type="radio" name="escolha" className="escolha esse" value={2} checked={selecionado == 2} onChange={handleChange}/>
            {selecionado == 2 ? 
            <div className="caminho esse">
                <h3>Candidato</h3>
                <img src={Candidato} alt=""/>
            </div>
            :
            <div className="caminho">
                <h3>Candidato</h3>
            <img src={Candidato} alt=""/>
            </div>
            }
            </div>
            <button type="button" onClick={() => {
                if(selecionado == 1){
                    navigate("cadastroEmpresa");
                }else if(selecionado == 2) {
                    navigate("cadastropessoa")
                }else{
                    alert("Por favor selecione seu caminho")
                }
            }
            }>Entrar</button>
        </div> 
        </>
    )
});

export default EscolhaCaminho;
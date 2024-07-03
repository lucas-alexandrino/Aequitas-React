import React from 'react';
import './cadastro2.css';
//import { FaLongArrowAltLeft } from "react-icons/fa";
//import { FaLongArrowAltRight } from "react-icons/fa";



function Page2() {
  return (
    <main className="main-content">
          
          <h1 id='titulo'>Insira detalhes essenciais sobre a vaga.</h1>
          <form >
          <div className="tituloVaga">
               <p> <label htmlFor="nome-empresa"><b>Titulo da vaga</b></label>
                <input type="text" id="nome-empresa" name="nome-empresa"></input></p>
            </div>
            <div className="NumeroVagas">
                <label htmlFor="numero-funcionarios"><b>Número de pessoas a serem contratadas para o cargo</b></label>
                <select id="numero-funcionarios" name="numero-funcionarios">
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                </select>
            </div>
            <div className='inputs'>
           <p> <fieldset className='vagatipo'>
              <legend>Tipo de Vaga</legend>
              <input type="button" value="+ Efetivo CLT" />
              <input type="button" value="+ Temporário" />
              <input type="button" value="+ Aprendiz" />
              <input type="button" value="+ PJ" />
            </fieldset></p>

            <fieldset className='horariotipo'>
              <legend>Horario de trabalho</legend>
              <input type="button" value="+ Diurno" />
              <input type="button" value="+ Noturno" />
              <input type="button" value="+ 12/36" /> 
              <input type="button" value="+ Folguista" />
            </fieldset>
            </div>
            <p><div className="data">
            <input id="date" type="date" />
            </div></p>
            <div className='botoes'>
              <button id='botaoVoltar'> <b> Voltar</b></button>
              <button id='botaoContinuar' type="submit"><b>Continue </b></button>
            </div>
            
          </form>
        
    </main>
  );
}

export default Page2;
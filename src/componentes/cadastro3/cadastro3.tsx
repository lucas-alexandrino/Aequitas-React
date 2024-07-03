
import './cadastro3.css';
//import { FaLongArrowAltLeft } from "react-icons/fa";
//import { FaLongArrowAltRight } from "react-icons/fa";



function cadastro3() {
  return (
    <main className="main-content">
          
          <h1 id='titulo'>Salário e Benefícios</h1>
          <form >
            <div className="salario">
                <label htmlFor="valorSalario"><b>Salário</b></label>
                <select id="valorSalario" name="valorSalario">
                    <option value="A combinar">A combinar</option>
                </select>
            </div>
            <div className='inputs'>
           <p>
            <fieldset className='pagamentoadd'>
           
              <legend>Pagamento Adicional</legend>
              <input type="button" value="+ 13° salário" />
              <input type="button" value="+ Adicional férias" />
              <input type="button" value="+ Hora extra" />
              <input type="button" value="+ Comissão" />
              <input type="button" value="+ Outro" />
            </fieldset>
        </p>

            <fieldset className='Benefícios'>
              <legend>Horario de trabalho</legend>
              <input type="button" value="+ Vale Transporte" />
              <input type="button" value="+ Vale-Alimentação" />
              <input type="button" value="+ Assistência médica" /> 
              <input type="button" value="+ Vale-Alimentação" />
              <input type="button" value="+ Assistência Odontológica" />
            </fieldset>
            </div>
            <p>Descreva a Vaga
            <div className="descricao">
              <input id="text" type="text" />
            </div></p>
            <div className='botoes'>
              <button id='botaoVoltar'><b>Voltar</b></button>
              <button id='botaoContinuar' type="submit"><b>Finalizar</b></button>
            </div>
            
          </form>
        
    </main>
  );
}

export default cadastro3;
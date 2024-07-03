
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from 'react-router-dom'; // Importe o Link do React Router

import './Pagamento1.css';
import imagem from '../../images/check.png'; // substitua com o caminho correto para sua imagem
import logo from '../../images/logo.png'



const Pagamentos1 = () => {
  return (
    <div className="pagamentos-container">
      <div className="pagamentos-quadrado">
      <img src={imagem} alt="Descrição da Imagem" className="imagem-no-quadrado" />
      <p className="passo-texto">PASSO 1 DE 3</p>
      <p className="funcoes-texto"> Funções extras </p>
      <div className="icone-e-texto">
          <AiOutlineCheck className="check-icon" />
          <span className="texto-icone">Sem compromisso, cancele quando quiser.</span>
        </div>
        <div className="icone-e-texto">
          <AiOutlineCheck className="check-icon" />
          <span className="texto-icone2">Escolha seu plano de recrutamento inclusivo.</span>
        </div>
        <div className="icone-e-texto">
          <AiOutlineCheck className="check-icon3" />
          <span className="texto-icone3">Recrutamento diversificado e inclusivo para<br/>impulsionar sua equipe.</span>
        </div>
        <Link to="/Pagamento2" className="botao-para-pagamentos2">Próximo</Link>

      </div>
      <Link to='/'><img src={logo} alt="Logo" className="logo_pagamento" /> </Link>
    </div>
  );
};

export default Pagamentos1;
import React from 'react';
import './Pagamento2.css';
import { Link } from 'react-router-dom'; // Importe o Link do React Router

import imagem from '../../images/pagamentogratuito.png'
import imagem2 from '../../images/pagamentomensal.png'
import imagem3 from '../../images/PagamentoAnual.png'
import logo from '../../images/logo.png'



const Pagamento2 = () => {
  return (
    <div className="container-de-retangulos">
      <div className="retangulo">
      <img src={imagem} alt="Descrição da Imagem" className="imagem-gratuito" />
      <p className="passo-texto">Gratuito</p><hr/>
      <p className="texto-icone">Acesso limitado à plataforma de recrutamento. </p> <hr/>
      <p className="texto-icone">Notificações de perfil limitado. </p> <hr/>
      </div>
      <div className="retangulo">
      <img src={imagem2} alt="Descrição da Imagem" className="imagem-gratuito" />
      <p className="passo-texto">R$ 100,00</p> <hr/>
      <p className="texto-icone">Acesso ilimitado à plataforma de recrutamento. </p> <hr/>
      <p className="texto-icone">Envie mensagem para quem quiser, com acesse ilimitado do chat.</p> <hr/>
      <p className="texto-icone">Tenha ajuda de IA no recrutamento. </p> <hr/>
      <p className="texto-icone"> Revisão colaborativa ilimitada. </p> 

      </div>
      <div className="retangulo">
      <img src={imagem3} alt="Descrição da Imagem" className="imagem-gratuito" />
      <p className="passo-texto">R$ 1.100</p><hr/>
      <p className="texto-icone">Acesso ilimitado à plataforma de recrutamento.</p> <hr/>
      <p className="texto-icone">Envie mensagem para quem quiser, com acesse ilimitado do chat.</p> <hr/>
      <p className="texto-icone">Tenha ajuda de IA no recrutamento. </p> <hr/>
      <p className="texto-icone"> Revisão colaborativa ilimitada. </p> 
      </div>
      <Link to='/'><img src={logo} alt="Logo" className="logo_pagamento" /></Link>  
      <Link to="/Pagamento3" className="botao-para-pagamentos3">Próximo</Link>
    </div>
  );
};

export default Pagamento2;

import './Pagamento3.css';
import logo from '../../images/logo.png'
import card from '../../images/cartoes.png'
import { Link } from 'react-router-dom';



const Pagamento3 = () => {
    return (
        <div className="pagamento3">
            <div className="quadrado3">
            <h1 id="formas-pagamento"> Escolha as formas de pagamentos
            <img src={card} alt="Card" className="Card"/>
            <input type="text" placeholder="Número do cartão" className="input-texto" />
            <input type="text" placeholder="Data de validade" className="input-texto" />
            <input type="text" placeholder="CVV" className="input-texto" />
            <input type="text" placeholder="Nome do cartão" className="input-texto" />
            </h1>
            <div className="formas-pagamentos">
            <p> Selecione os métodos de pagamento</p>

            <input type="radio" id="pix" name="formaPagamento" value="pix" />
                    <label className="label-pix" htmlFor="pix">Pix</label><br />
                    
                    <input type="radio" id="cartaoCredito" name="formaPagamento" value="cartaoCredito" />
                    <label className="label-credito" htmlFor="cartaoCredito">Crédito</label><br />
                    
                    <input type="radio" id="cartaoDebito" name="formaPagamento" value="cartaoDebito" />
                    <label className="label-debito" htmlFor="cartaoDebito">Débito</label>
                </div>
                <button className="finalizar-btn">Finalizar</button> 
            

     
            
               
            </div>
            <Link to='/'><img src={logo} alt="Logo" className="logo_pagamento" /></Link> 
        </div>
    );
}

export default Pagamento3;

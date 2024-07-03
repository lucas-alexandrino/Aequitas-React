


import './DescobrindoTalentos.css'
import talentos_imagem from "../../images/imagem_header_empresa.png"
import imagem_1 from "../../images/divulgacao.png"
import imagem_2 from "../../images/recrutamento.png"
import imagem_3 from "../../images/selecao.png"
import imagem_4 from "../../images/gestao.png"
import soft from "../../images/preparacao.png"

import diversidade from "../../images/Diversidade_talento.png"  
import HeaderEmpressa from '../HeaderEmpressa/HeaderEmpressa.tsx'
import { useNavigate } from 'react-router'

export default function DescobrindoTalentos(){
    const navigate = useNavigate();
    const criarVagas = () =>{
        navigate("/anunciar");
    }
    return (
        <>
        <HeaderEmpressa login={true}/>
        <div className='cabecalho_principal'>
            <div className='cabecalho_imagem'><img src={talentos_imagem} alt="" /></div>
            <div className='cabecalho_info'>
                <h2>Descobrimos talentos para impactar empresas</h2>
                <p>Publique uma vaga de emprego e atraia os currículos mais qualificados.</p>
                

                <button className='btn-vagas' onClick={criarVagas}><h3>Anunciar Vagas</h3></button>

            </div>
        </div>

        <div className='cabecalho_lista_titulo'>
            <h3>Realize recrutamento e seleção de maneira eficiente</h3>
        </div>
        <div className='cabecalho_lista'>

            <div className='lista'>
                <img src={imagem_1} alt="" />
                <h3>Divulgação</h3>
            </div>

            <div className='lista'>
                <img src={imagem_2} alt="" />
                <h3>Recrutamento</h3>
            </div>

            <div className='lista'>
            <img src={imagem_3} alt="" />
            <h3>Seleção</h3>
            </div>

            <div className='lista'>
            <img src={imagem_4} alt="" />
            <h3>Gestão</h3>
            </div>
        </div>
        
        <div className='soft_titulo'><h4>Use o ÆQUITAS For Business para diferentes desafios de Recrutamento e Seleção de pessoas</h4></div>
        
        <div className='soft_container'>

        <div className='soft_conteudo'>
                <img src={diversidade} alt="" />
                <h3>Diversidade e inclusão</h3>
                <p>Na ÆQUITAS, promovemos inclusão e diversidade no emprego, criando um  ambiente justo e igualitário para todos os candidatos. Junte-se a nós  para moldar um futuro de trabalho mais inclusivo e diversificado.</p>
        </div>

        <div className='soft_conteudo'>
                <img src={soft} alt="" />
                <p>Na ÆQUITAS, valorizamos soft skills e habilidades técnicas. Com testes  de perfil em parceria com HR Techs, identificamos talentos alinhados à  cultura das empresas, facilitando entrevistas para promover inclusão e  diversidade.</p>
        </div>
            
        </div>

        <div className='conteudo_secundario_titulo'>
            <h2>Deixe o ÆQUITAS fazer o trabalho pesado por você.</h2>
            <h4>Explore como o ÆQUITAS facilita a busca pelos profissionais ideais para sua empresa na prática</h4>
        </div>


        <section className="timeline-section">
	<div className="timeline-items">
		<div className="timeline-item">
			<div className="timeline-dot"></div>
			<div className="timeline-date">Passo 1</div>
			<div className="timeline-content">
				<h3>Diga à ÆQUITAS o que você precisa</h3>
				
			</div>
		</div>
		<div className="timeline-item">
			<div className="timeline-dot"></div>
			<div className="timeline-date">Passo 2</div>
			<div className="timeline-content">
				<h3>Receba uma seleção dos candidatos mais capacitados</h3>
				
			</div>
		</div>
		<div className="timeline-item">
			<div className="timeline-dot"></div>
			<div className="timeline-date">Passo 3</div>
			<div className="timeline-content">
				<h3>Inicie as entrevistas!</h3>
				
			</div>
            
		</div>
        
	</div>
    <button className='botao_timeline' onClick={criarVagas}><h3>Experimente</h3></button>
</section>


<footer className="rodape">
        
        <ul className="lista-rodape">
            <li className="lista-rodape__titulo">Institucional</li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Quem somos?</a>
            </li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Por que usar ÆQUITAS</a>
            </li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Acessibilidade no ÆQUITAS</a>
            </li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Fale conosco</a>
            </li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Termos</a>
            </li>

        </ul>

        <ul className="lista-rodape">
            <li className="lista-rodape__titulo">Empresas</li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Ajuda</a>
            </li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Anunciar vagas</a>
            </li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Buscar candidatos</a>
            </li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Política de privacidade</a>
            </li>

        </ul>

        <ul className="lista-rodape">
            <li className="lista-rodape__titulo">Candidatos</li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Ajuda</a>
            </li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Política de privacidade</a>
            </li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Vagas</a>
            </li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Cadastre seu currículo</a>
            </li>

        </ul>

        <ul className="lista-rodape">
            <li className="lista-rodape__titulo">Siga-nos</li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Ajuda</a>
            </li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Política de privacidade</a>
            </li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Vagas</a>
            </li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Cadastre seu currículo</a>
            </li>

        </ul>
    </footer>

        <h5>@ ÆQUITAS Todos os direitos reservados.</h5>
        
        </>
    )
}
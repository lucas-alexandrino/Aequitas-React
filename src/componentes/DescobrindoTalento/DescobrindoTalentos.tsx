import HeaderPessoa from '../HeaderPessoa/HeaderPessoa'
import './DescobrindoTalentos.css'
import talentos_imagem from "../../images/mulher.png"
import imagem_1 from "../../images/divulgacao.png"
import imagem_2 from "../../images/recrutamento.png"
import imagem_3 from "../../images/selecao.png"
import imagem_4 from "../../images/gestao.png"
import soft from "../../images/preparacao.png"
import diversidade from "../../images/diversidade.png"  
export default function DescobrindoTalentos(){
    return (
        <>

        <HeaderPessoa/>
        <div className='cabecalho_principal'>
            <div className='cabecalho_imagem'><img src={talentos_imagem} alt="" /></div>
            <div className='cabecalho_info'>
                <h2>Descobrimos talentos para impactar empresas</h2>
                <p>Publique uma vaga de emprego e atraia os currículos mais qualificados.</p>
                
                <button className='botao'><h3>Anunciar Vagas</h3></button>
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
                <p>No ÆQUITAS, valorizamos e promovemos a inclusão e diversidade em todas  as oportunidades de emprego. Nossa missão é criar um ambiente de  trabalho justo e igualitário para todos os candidatos, independentemente  de sua origem, identidade ou habilidades. Junte-se a nós e faça parte  de uma comunidade comprometida em moldar um futuro de trabalho mais  inclusivo e diversificado.</p>
        </div>

        <div className='soft_conteudo'>
                <img src={soft} alt="" />
                <p>Na ÆQUITAS, valorizamos as soft skills tanto quanto as habilidades  técnicas. Por meio de parcerias com HR Techs, oferecemos testes de  perfil que avaliam as habilidades comportamentais dos candidatos. Isso  nos permite identificar talentos que se destacam não apenas em suas  áreas, mas também se encaixam na cultura das empresas. Facilitamos  entrevistas orientadas com base nos resultados dos testes, garantindo a  melhor correspondência entre candidatos e empresas. Junte-se a nós para  promover a inclusão e a diversidade no local de trabalho, enquanto  descobre o poder das soft skills com o ÆQUITAS.</p>
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
</section>




        
        </>
    )
}
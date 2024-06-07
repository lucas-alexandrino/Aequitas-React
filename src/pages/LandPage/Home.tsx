
import { useState } from "react";
import ImagemBemVindo from '../../images/pessoaInicioLandPage.png'
import quadradoUm from '../../images/suporteQuadradoUm.png'
import "./home.css"
import cardPorqueUm from '../../images/cardPorqueUm.png'
import cardPorqueDois from '../../images/cardPorqueDois.png'
import cardPorqueTres from '../../images/cardPorqueTres.png'
import feedBackUm from '../../images/joao.jpeg'
import feedBackDois from '../../images/alice.jpeg'
import feedBackTres from '../../images/ana.jpeg'
export default function Home() {

    const [LinguaSelecionada, setLinguaSelecionada] = useState('pt');

    const mudarLinguagem = (event : any) => {
        setLinguaSelecionada(event.target.value);
    };

    return (
        <>
            <div className="landPageContent">
                
                <div className="headerLandPage">
                <div className="superior">
                    <a href="#bemVindo"><h1>ÆQUITAS</h1></a>
                    <div className="mudarLinguagem">
                        <label className={LinguaSelecionada === 'pt' ? 'linguagemAtiva' : ''} onClick={() => setLinguaSelecionada('pt')}>
                            <input type="radio" checked={LinguaSelecionada === "pt"} className="portugues" value="pt" name="lingua" onChange={mudarLinguagem} />
                            PT
                        </label>
                        <label className={LinguaSelecionada === 'en' ? 'linguagemAtiva' : ''} onClick={() => setLinguaSelecionada('en')}>
                            <input type="radio" checked={LinguaSelecionada === "en"} className="portugues" value="en" name="lingua" onChange={mudarLinguagem} />
                            EN
                        </label>
                    </div>
                    {LinguaSelecionada === "pt" ? <a href="#">Empressa?</a> : <a href="#">Company?</a>}
                    <p>/</p>
                    {LinguaSelecionada === "pt" ? <a href="#">Pessoa?</a> : <a href="#"> Person?</a>}
                    </div>
                    <div className="navBarLandPage">
                        <nav>
                            <ul>
                            <li><a href="#porqueAequitas">Por que ÆQUITAS</a></li>
                            <li><a href="#feedBack">FeedBack</a></li>
                            <li><a href="#planos">Nossos planos</a></li>
                            <li><a href="#futuro">Planos Futuros</a></li>
                            <li><a href="#contato">Contato</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div id="bemVindo">
                    <div className="textoBemVindo">
                    <h2>Bem-vindo a ÆQUITAS</h2>
                    <h3>ÆQUITAS: Além da igualdade.</h3>
                    <p>Uma plataforma de vagas afirmativas para melhorar a empregabilidade de minorias</p>
                    <button type="button" className="login">Login</button>
                    </div>
                    <div className="imagemBemVindo">
                    <img src={quadradoUm} alt="" />
                    <img src={ImagemBemVindo} alt="" />
                    </div>
                </div>
                <div id="porqueAequitas">
                    <h2>Por que usar a ÆQUITAS</h2>
                    <p>Conectamos talentos diversos com empresas comprometidas com a inclusão e diversidade.</p>
                    <div className="porqueCardContainer">
                    <div className="cardPorque">
                        <img src={cardPorqueUm} alt="" />
                        <p>Inclusão e Diversidade</p>
                        <div className="barra"></div>
                        <div className="escrita">
                            <p>
                            A Aequitas se compromete a promover a inclusão de grupos sub-representados no mercado de trabalho. Utilizar a plataforma ajuda a aumentar a diversidade nas empresas.
                            </p>
                        </div>
                    </div>
                    <div className="cardPorque">
                        <img src={cardPorqueDois} alt="" />
                        <p>Capacitação Profissional</p>
                        <div className="barra"></div>
                        <div className="escrita">
                            <p>
                            Além de conectar candidatos a vagas afirmativas, indicamos cursos gratuitos em diversas áreas, garantindo acesso a recursos educacionais de alta qualidade sem nenhum custo.
                            </p>
                        </div>
                    </div>
                    <div className="cardPorque">
                        <img src={cardPorqueTres} alt="" />
                        <p>Preparação para Entrevista</p>
                        <div className="barra"></div>
                        <div className="escrita">
                            <p>
                            Oferecemos simulações de entrevistas para equipar os candidatos com as melhores práticas e estratégias, ajudando-os a se destacarem e conquistarem oportunidades de emprego.
                            </p>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div id="feedBack">
                    <h2>FeedBacks</h2>
                    <p>Explore algumas avaliações do ÆQUITAS.</p>
                    <div className="containerFeedBack">
                        <div className="cardFeedBack">
                            <img src={feedBackUm} alt="" />
                            <h3>João, Rio de Janeiro</h3>
                            <p>Estou impressionado com o impacto do Aequitas em minha vida. Desde que comecei a usar a plataforma, tenho me sentido mais valorizado, empoderado e otimista sobre o futuro. É incrível como a inclusão pode fazer tanta diferença.</p>
                        </div>
                        <div className="cardFeedBack">
                            <img src={feedBackDois} alt="" />
                            <h3>Alice, São Paulo</h3>
                            <p>Aequitas fez uma diferença significativa na minha vida profissional. A plataforma não só facilita a busca por vagas afirmativas, mas também me deu uma sensação de pertencimento e reconhecimento que eu nunca tinha experimentado antes.</p>
                        </div>
                        <div className="cardFeedBack">
                            <img src={feedBackTres} alt="" />
                            <h3>Ana, Belo Horizonte</h3>
                            <p>Com Aequitas, encontrei um ambiente onde minhas habilidades e identidade são realmente valorizadas. A plataforma abriu portas para oportunidades que antes pareciam inalcançáveis. Estou muito grato por essa experiência transformadora.</p>
                        </div>
                    </div>
                </div>
                    <div id="planos">
                    <h2>Nossos Planos</h2>
                    <p>Escolha o plano que melhor se adapta às necessidades da sua empresa e potencialize suas chances de encontrar os melhores talentos com a Aequitas. Seja qual for o plano escolhido, estamos comprometidos em fornecer os melhores recursos e suporte para suas iniciativas de recrutamento inclusivo.&#10003;</p>
                    <div className="planos">
                        <div className="planosCard">
                            <h4>R$00<span>/Gratuito</span></h4>
                            <h3>Básico</h3>
                            <p>acesso a plataforma de recrutamento:</p>
                            <div className="beneficios">
                                <span>&#10003;</span>
                                <p>Conecte-se com uma ampla gama de candidatos diversificados.</p>
                            </div>
                            <div className="beneficios">
                                <span>&#10003;</span>
                                <p>Notificações de perfil que tenha o que a sua empresa procura.</p>
                            </div>
                            <div className="beneficios">
                                <span>&#10003;</span>
                                <p>Acesso simultâneo para 2 dispositivos:Revisão colaborativa de perfis de candidatos.</p>
                            </div>
                        </div>
                    </div>
                    <button type="button">Experimente</button>
                    </div>
                    <div id="futuro">

                    </div>
                    <div id="contato">

                    </div>
            </div>
        </>
    )
}
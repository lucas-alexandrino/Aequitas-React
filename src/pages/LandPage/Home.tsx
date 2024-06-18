
import { useEffect, useRef, useState } from "react";
import ImagemBemVindo from '../../images/pessoaInicioLandPage.png'
import quadradoUm from '../../images/suporteQuadradoUm.png'
import "./home.css"
import cardPorqueUm from '../../images/cardPorqueUm.png'
import cardPorqueDois from '../../images/cardPorqueDois.png'
import cardPorqueTres from '../../images/cardPorqueTres.png'
import feedBackUm from '../../images/joao.jpeg'
import feedBackDois from '../../images/alice.jpeg'
import feedBackTres from '../../images/ana.jpeg'
import { Link, useNavigate } from "react-router-dom";
import EscolhaCaminho from "../../componentes/escolhaCaminho/EscolhaCaminho";
import futuroUm from "../../images/FuturoUm.png"
import futuroDois from "../../images/FuturoDois.png"
import waveFuturoDois from "../../images/waveFuturoDois.png"
import futuroTres from "../../images/futuroTres.png"
import waveFeedBack from "../../images/feedBack.png"
import faleConosco from "../../images/faleConosco.png"
import waveFuturoQuatro from "../../images/waveFuturoQuatro.png"
import futuroQuatro from "../../images/futuroQutro.png"
import portugues from "../../images/portugues.jpg"
import ingles from "../../images/Ingles.jpg"



export default function Home() {

    const porqueAequitasRef = useRef(null);
    const bemVindoRef = useRef(null);
    const feedBackRef = useRef(null);
    const planosRef = useRef(null);
    const futuroRef = useRef(null);
    const contatoRef = useRef(null);
    const [caminho, setCaminho] = useState(false);

    const fechar = (fechar: any) => {
        setCaminho(fechar);
    };

    const scrollToSection = (ref: any) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [LinguaSelecionada, setLinguaSelecionada] = useState('pt');

    const mudarLinguagem = (lingua: any) => {
        setLinguaSelecionada(lingua);
        console.log(LinguaSelecionada);
    };

    const [selectedValue, setSelectedValue] = useState(1);
    const [contador, setContador] = useState(0);

    const handleChange = (event: any) => {
        setSelectedValue(parseInt(event.target.value, 10));
    };

    useEffect(() => {
        const incrementarContador = () => {
            setContador(prevContador => prevContador + 1);
            setSelectedValue(prevSelectedValue => {
                if (prevSelectedValue < 4) {
                    return prevSelectedValue + 1;
                } else {
                    return 1;
                }
            });
        };
        const intervalo = setInterval(incrementarContador, 7000);
        return () => clearInterval(intervalo);
    }, [selectedValue]);

    return (
        <>
            {caminho && <div className="borrarFundo"><EscolhaCaminho fecharPag={fechar} /></div>}
            <div className="landPageContent">
                <NavBar lingua={LinguaSelecionada} mudarLinguagem={mudarLinguagem} scrool={scrollToSection} bemVindo={bemVindoRef} porqueAequitas={porqueAequitasRef} feedBack={feedBackRef} planos={planosRef} futuro={futuroRef} contato={contatoRef} />
                <div id="bemVindo" ref={bemVindoRef}>
                    <BemVindo lingua={LinguaSelecionada} caminho={caminho} setCaminho={setCaminho} />
                </div>
                <div id="porqueAequitas" ref={porqueAequitasRef}>
                    <PorqueAequitas lingua={LinguaSelecionada} />
                </div>
                <div id="feedBack" ref={feedBackRef}>
                    <FeedBack lingua={LinguaSelecionada} />
                </div>
                <div id="planos" ref={planosRef}>
                    <Planos lingua={LinguaSelecionada} />
                </div>
                <div id="futuro" ref={futuroRef}>

                    {selectedValue == 1 && <FuturoUm lingua={LinguaSelecionada} />}
                    {selectedValue == 2 && <FuturoDois lingua={LinguaSelecionada} />}
                    {selectedValue == 3 && <FuturoTres lingua={LinguaSelecionada} />}
                    {selectedValue == 4 && <FuturoQuatro lingua={LinguaSelecionada} />}
                    <div className="futuroOpcao">
                        <div>
                            <input type="radio" name="futuro" checked={selectedValue == 1} value={1} onChange={handleChange} />
                            <span></span>
                        </div>
                        <div>
                            <input type="radio" name="futuro" checked={selectedValue == 2} value={2} onChange={handleChange} />
                            <span></span>
                        </div>
                        <div>
                            <input type="radio" name="futuro" checked={selectedValue == 3} value={3} onChange={handleChange} />
                            <span></span>
                        </div>
                        <div>
                            <input type="radio" name="futuro" checked={selectedValue == 4} value={4} onChange={handleChange} />
                            <span></span>
                        </div>
                    </div>
                </div>
                <div id="contato" ref={contatoRef}>
                    <Contato lingua={LinguaSelecionada}/>
                </div>
            </div>
        </>
    )
}

const NavBar = (props: any) => {
    const [linguagem, setLinguagem] = useState("pt")
    const handleClick = () =>{
        linguagem === "pt" ? setLinguagem("en") : setLinguagem("pt");
        props.mudarLinguagem(linguagem);
    }
    useEffect(() => {
        props.mudarLinguagem(linguagem);
      }, [linguagem, props]);

    return (
        <>
            <div className="headerLandPage">
                <div className="superior">
                    <a onClick={() => props.scrool(props.bemVindo)}><h1>ÆQUITAS</h1></a>
                    <div className="mudarLinguagem">
                        <button className={linguagem === "pt" ? "portugues" : "ingles"} onClick={handleClick}>
                            {
                                <img src={linguagem === "pt" ? portugues : ingles} alt="" />
                            }
                        </button>
                        <span className={linguagem === "pt" ? "" : "inglesE"}>{linguagem === "pt" ? "Português" : "English"}</span>
                    </div>
                </div>
                <div className="navBarLandPage">
                    <nav>
                        {
                            props.lingua === "pt" ?
                            <ul>
                            <li><a onClick={() => props.scrool(props.porqueAequitas)}>Por que ÆQUITAS</a></li>
                            <li><a onClick={() => props.scrool(props.feedBack)}>FeedBack</a></li>
                            <li><a onClick={() => props.scrool(props.planos)}>Nossos planos</a></li>
                            <li><a onClick={() => props.scrool(props.futuro)}>Planos Futuros</a></li>
                            <li><a onClick={() => props.scrool(props.contato)}>Contato</a></li>
                        </ul>
                        :
                        <ul>
                            <li><a onClick={() => props.scrool(props.porqueAequitas)}>Why ÆQUITAS</a></li>
                            <li><a onClick={() => props.scrool(props.feedBack)}>FeedBack</a></li>
                            <li><a onClick={() => props.scrool(props.planos)}>Plans</a></li>
                            <li><a onClick={() => props.scrool(props.futuro)}>Future</a></li>
                            <li><a onClick={() => props.scrool(props.contato)}>Contact</a></li>
                        </ul>
                        }
                        
                    </nav>
                </div>
            </div>
        </>
    )
}
const BemVindo = (props: any) => {
    const navigate = useNavigate();
    return (
        <>
        {
            props.lingua === "pt" ? 
            <div className="textoBemVindo">
            <h2>Bem-vindo a ÆQUITAS</h2>
            <h3>ÆQUITAS: Além da igualdade.</h3>
            <p>Uma plataforma de vagas afirmativas para melhorar a empregabilidade de minorias</p>
            <div className="botoes">
                <button type="button" className="login" onClick={() => { props.setCaminho(!props.caminho) }}>Juntar-se</button>
                {/* <button type="button" className="login" onClick={() => { return navigate("login") }}>Login</button> */}
            </div>
            </div>
            :
            <div className="textoBemVindo">
            <h2>Welcome to ÆQUITAS</h2>
            <h3>ÆQUITAS: Beyond equality.</h3>
            <p>An affirmative vacancy platform to improve the employability of minorities</p>
            <div className="botoes">
                <button type="button" className="login" onClick={() => { props.setCaminho(!props.caminho) }}>Juntar-se</button>
                {/* <button type="button" className="login" onClick={() => { return navigate("login") }}>Login</button> */}
            </div>
            </div>
        }
        <img src={quadradoUm} alt="" />
        <img src={ImagemBemVindo} alt="" />
            
            
        </>
    )
}

const PorqueAequitas = (props: any) => {
    return (
        <>
            {
                props.lingua === "pt" ? <div className="containerPorqueAequitas">
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
            :
            <div className="containerPorqueAequitas">
                <h2>Why use ÆQUITAS</h2>
                <p>We connect diverse talents with companies committed to inclusion and diversity.</p>
                <div className="porqueCardContainer">
                    <div className="cardPorque">
                        <img src={cardPorqueUm} alt="" />
                        <p>Inclusion and Diversity</p>
                        <div className="barra"></div>
                        <div className="escrita">
                            <p>
                            Aequitas is committed to promoting the inclusion of underrepresented groups in the job market. Using the platform helps increase diversity in companies.
                            </p>
                        </div>
                    </div>
                    <div className="cardPorque">
                        <img src={cardPorqueDois} alt="" />
                        <p>Professional Training</p>
                        <div className="barra"></div>
                        <div className="escrita">
                            <p>
                            In addition to connecting candidates to affirmative vacancies, we recommend free courses in various areas, ensuring access to high-quality educational resources at no cost.
                            </p>
                        </div>
                    </div>
                    <div className="cardPorque">
                        <img src={cardPorqueTres} alt="" />
                        <p>Interview Preparation</p>
                        <div className="barra"></div>
                        <div className="escrita">
                            <p>
                            We offer mock interviews to equip candidates with best practices and strategies, helping them stand out and win job opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

const FeedBack = (props: any) => {
    return (
        <>
            <div className="containerFeedBack">
                <div className="escritaFeedBack">
                        {
                            props.lingua === "pt" ?
                            <>
                                <h2>FeedBacks</h2>
                                <p>Explore algumas avaliações do ÆQUITAS.</p>
                            </>
                            :
                            <>
                                <h2>FeedBacks</h2>
                                <p>Explore some ÆQUITAS reviews.</p>
                            </>
                        }
                    
                </div>
                <div className="containerCardFeedBack">
                    <div className="cardFeedBack">
                        <img src={feedBackUm} alt="foto do joão" />
                        {
                            props.lingua === "pt" ?
                            <>
                                <h3>João, Rio de Janeiro</h3>
                                <p>Estou impressionado com o impacto do Aequitas em minha vida. Desde que comecei a usar a plataforma, tenho me sentido mais valorizado, empoderado e otimista sobre o futuro. É incrível como a inclusão pode fazer tanta diferença.</p>
                            </>
                            :
                            <>
                                <h3>João, Rio de Janeiro</h3>
                                <p>I am amazed at the impact Aequitas has had on my life. Since I started using the platform, I have felt more valued, empowered and optimistic about the future. It's incredible how inclusion can make such a difference.</p>
                            </>
                        }
                        
                    </div>
                    <div className="cardFeedBack">
                        <img src={feedBackDois} alt="foto da alice" />
                        {
                            props.lingua === "pt" ?
                            <>
                                <h3>Alice, São Paulo</h3>
                                <p>Aequitas fez uma diferença significativa na minha vida profissional. A plataforma não só facilita a busca por vagas afirmativas, mas também me deu uma sensação de pertencimento e reconhecimento que eu nunca tinha experimentado antes.</p>
                            </>
                            :
                            <>
                                <h3>Alice, São Paulo</h3>
                                <p>Aequitas has made a significant difference in my professional life. The platform not only makes it easier to search for affirmative vacancies, but it also gave me a sense of belonging and recognition that I had never experienced before.</p>
                            </>
                        }
                        
                    </div>
                    <div className="cardFeedBack">
                        <img src={feedBackTres} alt="foto da ana" />
                        {
                            props.lingua === "pt" ?
                            <>
                                <h3>Ana, Belo Horizonte</h3>
                                <p>Com Aequitas, encontrei um ambiente onde minhas habilidades e identidade são realmente valorizadas. A plataforma abriu portas para oportunidades que antes pareciam inalcançáveis. Estou muito grato por essa experiência transformadora.</p>
                            </>
                            :
                            <>
                                <h3>Ana, Belo Horizonte</h3>
                                <p>With Aequitas, I found an environment where my skills and identity are truly valued. The platform has opened doors to opportunities that previously seemed unattainable. I am so grateful for this transformative experience.</p>
                            </>
                        }
                        
                    </div>
                </div>
                <img src={waveFeedBack} alt="" />
            </div>
        </>
    )
}

const Planos = (props: any) => {
    return (
        <>
        {
                            props.lingua === "pt" ?
                            <>
                                <h2>Nossos Planos</h2>
            <p>Escolha o plano que melhor se adapta às necessidades da sua empresa e potencialize suas chances de encontrar os melhores talentos com a Aequitas. Seja qual for o plano escolhido, estamos comprometidos em fornecer os melhores recursos e suporte para suas iniciativas de recrutamento inclusivo.</p>
            <div className="planos">
                <div className="planosCard">
                    <h4>R$00<span> / gratuito</span></h4>
                    <h3>Básico</h3>
                    <p>acesso a plataforma de recrutamento:</p>
                    <div className="beneficios">
                        <div className="circuloCheckup">
                            <span>&#10003;</span>
                        </div>
                        <div className="beneficioDetalhe">
                            <p>Conecte-se com uma ampla gama de candidatos diversificados.</p>
                        </div>
                    </div>
                    <div className="beneficios">
                        <div className="circuloCheckup">
                            <span>&#10003;</span>
                        </div>
                        <div className="beneficioDetalhe">
                            <p>Notificações de perfil que tenha o que a sua empresa procura.</p>
                        </div>
                    </div>
                    <div className="beneficios">
                        <div className="circuloCheckup">
                            <span>&#10003;</span>
                        </div>
                        <div className="beneficioDetalhe">
                            <p>Acesso simultâneo para 2 dispositivos:Revisão colaborativa de perfis de candidatos
                            </p>
                        </div>
                    </div>
                </div>
                <div className="planosCard escolhido">
                    <h4>R$50<span> / mês</span></h4>
                    <h3>Mensal</h3>
                    <p>acesso a plataforma de recrutamento:</p>
                    <div className="beneficios">
                        <div className="circuloCheckup">
                            <span>&#10003;</span>
                        </div>
                        <div className="beneficioDetalhe">
                            <p>Publicação de vagas e acesso a uma ampla variedade de candidatos qualificados e diversos.</p>
                        </div>
                    </div>
                    <div className="beneficios">
                        <div className="circuloCheckup">
                            <span>&#10003;</span>
                        </div>
                        <div className="beneficioDetalhe">
                            <p>Acesso ilimitado de dispositivos: Revisão colaborativa de perfis de candidatos.
                            </p>
                        </div>
                    </div>
                    <div className="beneficios">
                        <div className="circuloCheckup">
                            <span>&#10003;</span>
                        </div>
                        <div className="beneficioDetalhe">
                            <p>Ajuda de IA: Utiliza ia para ajudar no recrutamento.</p>
                        </div>
                    </div>
                </div>
                <div className="planosCard">
                    <h4>R$600<span>/ ano</span></h4>
                    <h3>Ano</h3>
                    <p>acesso a plataforma de recrutamento:</p>
                    <div className="beneficios">
                        <div className="circuloCheckup">
                            <span>&#10003;</span>
                        </div>
                        <div className="beneficioDetalhe">
                            <p>Publicação de vagas e acesso a uma ampla variedade de candidatos qualificados e diversos.</p>
                        </div>
                    </div>
                    <div className="beneficios">
                        <div className="circuloCheckup">
                            <span>&#10003;</span>
                        </div>
                        <div className="beneficioDetalhe">
                            <p>Acesso ilimitado de dispositivos: Revisão colaborativa de perfis de candidatos.
                            </p>
                        </div>
                    </div>
                    <div className="beneficios">
                        <div className="circuloCheckup">
                            <span>&#10003;</span>
                        </div>
                        <div className="beneficioDetalhe">
                            <p>Ajuda de IA: Utiliza ia para ajudar no recrutamento.</p>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button">Experimente</button>
                            </>
                            :
                            <>
                                <h2>Plans</h2>
            <p>Choose the plan that best suits your company's needs and maximize your chances of finding the best talent with Aequitas. Whichever plan you choose, we're committed to providing the best resources and support for your inclusive recruiting initiatives.</p>
            <div className="planos">
                <div className="planosCard">
                    <h4>$00<span> / free</span></h4>
                    <h3>Basic</h3>
                    <p>access to recruitment platform:</p>
                    <div className="beneficios">
                        <div className="circuloCheckup">
                            <span>&#10003;</span>
                        </div>
                        <div className="beneficioDetalhe">
                            <p>Connect with a wide range of diverse candidates.

</p>
                        </div>
                    </div>
                    <div className="beneficios">
                        <div className="circuloCheckup">
                            <span>&#10003;</span>
                        </div>
                        <div className="beneficioDetalhe">
                            <p>Profile notifications that have what your company is looking for.</p>
                        </div>
                    </div>
                    <div className="beneficios">
                        <div className="circuloCheckup">
                            <span>&#10003;</span>
                        </div>
                        <div className="beneficioDetalhe">
                            <p>Simultaneous access for 2 devices:Collaborative review of candidate profiles.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="planosCard escolhido">
                    <h4>$10<span> / month</span></h4>
                    <h3>Monthly</h3>
                    <p>access to recruitment platform:</p>
                    <div className="beneficios">
                        <div className="circuloCheckup">
                            <span>&#10003;</span>
                        </div>
                        <div className="beneficioDetalhe">
                            <p>Posting jobs and accessing a wide range of qualified and diverse candidates.</p>
                        </div>
                    </div>
                    <div className="beneficios">
                        <div className="circuloCheckup">
                            <span>&#10003;</span>
                        </div>
                        <div className="beneficioDetalhe">
                            <p>Unlimited device access: Collaborative review of candidate profiles.
                            </p>
                        </div>
                    </div>
                    <div className="beneficios">
                        <div className="circuloCheckup">
                            <span>&#10003;</span>
                        </div>
                        <div className="beneficioDetalhe">
                            <p>AI help: Uses AI to help with recruiting.</p>
                        </div>
                    </div>
                </div>
                <div className="planosCard">
                    <h4>$120<span>/ Year</span></h4>
                    <h3>Year</h3>
                    <p>access to recruitment platform:</p>
                    <div className="beneficios">
                        <div className="circuloCheckup">
                            <span>&#10003;</span>
                        </div>
                        <div className="beneficioDetalhe">
                            <p>Posting jobs and accessing a wide range of qualified and diverse candidates.</p>
                        </div>
                    </div>
                    <div className="beneficios">
                        <div className="circuloCheckup">
                            <span>&#10003;</span>
                        </div>
                        <div className="beneficioDetalhe">
                            <p>Unlimited device access: Collaborative review of candidate profiles.
                            </p>
                        </div>
                    </div>
                    <div className="beneficios">
                        <div className="circuloCheckup">
                            <span>&#10003;</span>
                        </div>
                        <div className="beneficioDetalhe">
                            <p>AI help: Uses AI to help with recruiting.</p>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button">try</button>
                            </>
                        }
            
        </>
    )
}
const FuturoUm = (props: any) => {

    return (
        <>
            <div className="containerFuturoUm">
                <div className="conteudoFuturoUm">
                    {
                        props.lingua === "pt" ? 
                        <>
                        <h2>Suporte Móvel: Em breve, acesso completo pelo seu smartphone.</h2>
                        <p>A Aequitas está criando uma versão móvel da plataforma, que permitirá aos usuários acessar todas as funcionalidades pelo smartphone. Em breve, será possível buscar vagas, candidatar-se e gerenciar o perfil de qualquer lugar, proporcionando uma experiência otimizada e conveniente para dispositivos móveis.</p>
                        </>
                        :
                        <>
                        <h2>Mobile Support: Coming soon, full access via your smartphone.</h2>
                        <p>Aequitas is creating a mobile version of the platform, which will allow users to access all features via smartphone. Soon, you'll be able to search for jobs, apply and manage your profile from anywhere, providing an optimized and convenient experience for mobile devices.</p>
                        </>
                        
                    }
                    
                </div>
                <img src={futuroUm} alt="a plataforma rodando em celular" />
            </div>
        </>
    )
};

const FuturoDois = (props: any) => {

    return (
        <>
            <div className="containerFuturoDois">
                <div className="conteudoFuturoDois">
                    {
                        props.lingua === "pt" ? 
                        <>
                        <h2>Chat ao Vivo</h2>
                        <p>Estamos introduzindo um recurso de chat ao vivo para fornecer suporte imediato aos nossos usuários. Com o chat ao vivo da Aequitas, você terá assistência instantânea na plataforma para dúvidas sobre candidaturas, perfis ou vagas disponíveis.</p>
                        </>
                        :
                        <>
                        <h2>Live Chat</h2>
                        <p>We are introducing a live chat feature to provide immediate support to our users. With Aequitas live chat, you will have instant assistance on the platform for questions about applications, profiles or available vacancies.</p>
                        </>
                    }
                    
                </div>
                <img src={futuroDois} alt="a plataforma rodando em celular" />
                <img src={waveFuturoDois} alt="a plataforma rodando em celular" />
            </div>
        </>
    )
};


const FuturoTres = (props: any) => {

    return (
        <>
            <div className="containerFuturoTres">
                <div className="conteudoFuturoTres">
                {
                        props.lingua === "pt" ? 
                        <>
                        <h2>Suporte a Múltiplos Idiomas: Nossa plataforma em diversos idiomas para atender a todos.</h2>
                        <p>tornando a plataforma acessível para pessoas de diferentes origens e culturas. Todos poderão aproveitar os benefícios da Aequitas de forma inclusiva, independentemente do idioma que falam. O objetivo é facilitar a busca por oportunidades de emprego para todos.</p>
                        </>
                        :
                        <>
                        <h2>Multiple Language Support: Our platform in multiple languages ​​to suit everyone.</h2>
                        <p>making the platform accessible to people from different backgrounds and cultures. Everyone will be able to enjoy the benefits of Aequitas in an inclusive way, regardless of the language they speak. The objective is to facilitate the search for job opportunities for everyone.</p>
                        </>
                }
                    
                </div>
                <img src={futuroTres} alt="a plataforma rodando em celular" />
            </div>
        </>
    )
};

const FuturoQuatro = (props: any) => {

    return (
        <>
            <div className="containerFuturoQuatro">
                <div className="conteudoFuturoQuatro">
                    {
                    props.lingua === "pt" ?
                    <>
                    <h2>Jogo Interativo</h2>
                    <ul>
                        <li><span>Dicas de Vestuário: </span>Orientações sobre como se vestir para diferentes entrevistas</li>
                        <li><span>Comportamento em Entrevistas: </span>Conselhos sobre postura e etiqueta profissional.</li>
                        <li><span>Simulação de Entrevistas: </span>Ambiente virtual para praticar entrevistas.</li>
                        <li><span>Perguntas Frequentes: </span>Simulações de respostas para perguntas comuns.</li>
                    </ul>
                    <p>Esse novo recurso ajudará candidatos a se prepararem melhor e permitirá que empresas encontrem candidatos mais qualificados e confiantes.</p>
                    </>
                    :
                    <>
                    <h2>Interactive Game</h2>
                    <ul>
                        <li><span>Dressing Tips: </span>Guidelines on how to dress for different interviews</li>
                        <li><span>Behavior in Interviews: </span>Advice on posture and professional etiquette.</li>
                        <li><span>Interview Simulation: </span>Virtual environment to practice interviews.</li>
                        <li><span>Frequently Asked Questions: </span>Simulated answers to common questions.</li>
                    </ul>
                    <p>This new feature will help candidates better prepare and allow companies to find more qualified and confident candidates.</p>
                    </>
                    }
                    
                </div>
                <img src={waveFuturoQuatro} alt="" />
                <img src={futuroQuatro} alt="" />
            </div>
        </>
    )
};

const Contato = (props : any) => {
    return (
        <>
            <div className="contatoContainer">
            {
                props.lingua === "pt" ?
                <>
                    <h2>Quer saber mais? Entre em contato!</h2>
                <div className="escritaContato">
                    <form>
                        <input type="text" className="nome" placeholder="Nome" />
                        <input type="email" className="email" placeholder="E-mail" />
                        <input type="text" className="mensagem" placeholder="Mensagem" />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
                </>
                :
                <>
                    <h2>Want to know more? Contact!</h2>
                <div className="escritaContato">
                    <form>
                        <input type="text" className="nome" placeholder="Name" />
                        <input type="email" className="email" placeholder="Email" />
                        <input type="text" className="mensagem" placeholder="Message" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                </>
            }
                <img src={faleConosco} alt="" />
            </div>
        </>
    )
}

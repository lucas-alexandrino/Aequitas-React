import './bancoTalento2.css'
import './bancoTalento.css'
import HeaderBanco from "../../componentes/HeaderBanco/HeaderBanco"
import fundoJornal from "../../images/BJ JORNAL.png"
import logoOracle from "../../images/image 47.png"
import line from "../../images/Line.png"
import line2 from "../../images/LineVertical.png"
import stars from "../../images/stars.png"
import star from "../../images/Star.png"
import resume from "../../images/Resume.png"
import seta from "../../images/Seta.png"
import seta2 from "../../images/Seta2.png"
import email from "../../images/Letter.png"
import phone from "../../images/Phone.png"
import diploma from "../../images/Diploma.png"
import chatIcon from "../../images/ChatIcon.png"
import { IoIosSearch } from "react-icons/io";
import fotoCandidato from "../../images/maria.png"
import fotoCandidato2 from "../../images/davy.jpg"
import { Link } from "react-router-dom";

export default function BancoTalento2(){

    return(
        <>

            <div className="containerBancoTalentos2">
                <HeaderBanco/>
            
            <div className="bancotalendo">
            <div className="meio">

                <div className="fundo-pg2">
                    <img src={fundoJornal} alt="Fundo Jornal" style={{ width: '850px', height:'150px'}}  />
                    </div>

            <div className="perfilOracle">
                <img className='logoEmpresa-pg2' src={logoOracle} alt="Perfil" />
                <p className='empresaNome-pg2'>BJ Jornal</p>
                <p className="starsRate-pg2"> 4,5</p>
                <img className="stars-pg2" src={stars} alt="Stars" />

            </div>
            <div className="abas">
                <li className="abasconfig" >Visão Geral</li>
                <li className="abasconfig">Anunciar Vagas</li>
                <li className="abasconfig">Candidatos</li>
                <li className="abasconfig">Vagas</li>
                <li className="abasconfig">Mensagens</li>
                <li className="selected">Banco de Talentos</li>
            </div>
                <img src={line} className="line" alt="Fundo Oracle" />
            <div className="pesquisa-pg2">
            <form className='pesquisarVaga-pg2'>
                <IoIosSearch size="40px"/>
                <input className='buscar-pg2' type="text" placeholder="Digite o nome da vaga" />
                <button className='btnBuscar-pg2' type="submit">Buscar</button>
            </form> 
            <div className="vagas-container-pag2">
            <div className="vagaCard-pag2">
            <div className="nota-pg2">
                <img src={star} alt="" />
                <p>5,0</p>
            </div>
                
            <button className='voltar'>
                <Link to="/talentos">
                    <img src={seta2} alt="" />
                </Link>
            </button>
                <h2 className="vagaTitulo-pg2">Jornalista Multimídia</h2>
                <p className="vagaLocal-pg2">Localização: Cidade, Estado</p>
                <p className="vagaDescri-pg2">Há 2 candidato no banco de talentos para esta vaga!</p>
            </div>
            </div>  
                 <img src={line} className="line2" alt="Fundo Oracle" />

                 <div className="candidatos-pg2">
                 <ul className="candidato-lista-pg2">
                        <li className='lista-candidato-pg2' >
                            <img src={fotoCandidato} className='fotoCandidato-pg2' alt="Foto de Usuário 1" />
                            <div className="candidato-info-pg2">
                                <div className="name-pg2">Maria Marques</div>
                                <div className="prof-pg2">Jornalista</div>
                                <div className="location-pg2">São Paulo, SP</div>
                            </div>
                        </li>
                        <li className='lista-candidato-pg2' >
                            <img src={fotoCandidato2} className='fotoCandidato-pg2' alt="Foto de Usuário 1" />
                            <div className="candidato-info-pg2">
                                <div className="name-pg2">Canditato</div>
                                <div className="location-pg2">São Paulo - SP</div>
                            </div>
                        </li>
                            
    </ul>               
    <div className="cartao-perfil">
        <div className="tituloPerfil">
            <p>Pré-Visualização do perfil</p>
        </div>
        <div className="secao-esquerda">
            <div className="info-perfil">
                <img src={fotoCandidato} alt="Foto do Usuário"/>
                <div>
                    <div className="nome-pg2">Maria Marques</div>
                    <div className="profissao">Jornalista</div>
                    <div className="localizacao">Itaquaquecetuba ,SP</div>
                </div>
            </div>
            <a href="#" className="botao-curriculo">
            <div className="resume">
                <img src={resume} alt="" />
            </div>
                Currículo AEQUITAS 
                <br />
                 <p className='p2'>Última atualização: 20/06/2024</p>
            <div className="seta-pg2">
                <img src={seta} alt="" />
            </div>
            </a>
            <div className="detalhes-perfil">
                <h3>Competências Técnicas</h3>
                <ul>
                   <p>Pesquisa e Análise de Dados, Redação e Edição de Conteúdo, Entrevista e Coleta de Informações, 
                   Conhecimento em SEO e Mídias Digitais</p>
                </ul>
                <h3>Competências Comportamentais</h3>
                <ul>
                    <p>Comunicação Eficaz, Pensamento Crítico, Gestão de Tempo, Adaptabilidade</p>
                </ul>
                <h3>Testes Obrigatórios Feitos</h3>
                <ul>
                    <p>Concluiu os testes obrigatorios, acertando  95% do total</p>
                </ul>
            </div>
        </div>
        <img src={line2} alt="" />
        <div className="secao-direita">
            <div className="info-contato">
                <h3>Informações de Contato</h3>
                
                <p><img src={email} alt="" /> maria.marques@gmail.com</p>
                <p><img src={phone} alt="" /> (11) 0101-0101</p>
            </div>
            <div className="grupo-botoes">
                <button className='certificado'> <img src={diploma} alt="" />Certificados</button>
                <button className='perfil-completo'> Perfil Completo</button>
            </div>
            <div className="chat">
                <img src={chatIcon} alt="" />
            </div>
        </div>
    </div>

                
                 </div>
            </div> 
            </div>    
            </div>  
            </div>   
    </>
    )
}
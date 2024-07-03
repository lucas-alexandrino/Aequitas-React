import './bancoTalento.css'
import HeaderBanco from "../../componentes/HeaderBanco/HeaderBanco"
import fundoJornal from "../../images/BJ JORNAL.png"
import logoOracle from "../../images/image 47.png"
import line from "../../images/Line.png"
import stars from "../../images/stars.png"
import star from "../../images/Star.png"
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
// import MidBanco from "../../componentes/HeaderBanco/MidBanco"


export default function BancoTalento(){

    return(
        <>

            <div className="containerBancoTalentos">
                <HeaderBanco/>
            <div className="bancotalendo">
            <div className="meio">

                <div className="fundo">

                    <img src={fundoJornal} alt="Fundo Oracle" style={{ width: '850px', height:'150px'}} />

                    </div>

            <div className="perfilOracle-pg1">
                <img className='logoEmpresa' src={logoOracle} alt="Perfil" />
                <p className='empresaNome'>BJ Jornal</p>
                <p className="starsRate"> 4,5</p>
                <img className="stars" src={stars} alt="Stars" />

            </div>
            <div className="abas">
                <li className="abasconfig" >Visão Geral</li>
                <li className="abasconfig"><Link to='/anunciar'>Anunciar Vagas</Link></li>
                <li className="abasconfig">Candidatos</li>
                <li className="abasconfig">Vagas</li>
                <li className="abasconfig">Mensagens</li>
                <li className="selected">Banco de Talentos</li>
            </div>
                <img src={line} className="line" alt="Fundo Oracle" />
            <div className="pesquisa-pg1">
            <form className='pesquisarVaga'>
                <IoIosSearch size="40px"/>
                <input className='buscar' type="text" placeholder="Digite o nome da vaga" />
                <button className='btnBuscar' type="submit">Buscar</button>
            </form> 


             </div>
        <div className="vagas-container">
        <div className="vagaCard">

        <div className="nota-pg1">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Jornalista Multimídia</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <button className="VagaEntrar">
                <Link to="/talentos2">
                Entrar
                </Link> 
                    
                </button>
            </div>
            <div className="vagaCard">
                <div className="nota-pg1">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>

                <h2 className="vagaTitulo">Especialista em Dados e Jornalismo</h2>

                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="#" ><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota-pg1">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Produtor de Vídeo</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="#" ><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota-pg1">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Assessor de Imprensa</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="#" ><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota-pg1">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Jornalista Multimídia</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="#" ><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota-pg1">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Correspondente Internacional</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="#" ><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota-pg1">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Colunista de Opinião</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="#" ><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota-pg1">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Fotógrafo de Jornalismo</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="#" ><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota-pg1">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Editor de Notícias Online</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="#" ><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota-pg1">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Editor Chefe</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="#" ><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota-pg1">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Repórter Investigativo</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="#" ><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota-pg1">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Gestor de Comunidade</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="#" ><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota-pg1">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Tradutor de Conteúdo Jornalístico</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="#" ><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota-pg1">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>

                <h2 className="vagaTitulo">Redator de Notícias Esportivas</h2>

                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="#" ><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota-pg1">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Produtor de Rádio</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="#" ><button className="VagaEntrar">Entrar</button></a>
            </div>

        </div>
        <div className="footer">
        </div>
                </div>
                </div>
                </div>

            </>
        )
}
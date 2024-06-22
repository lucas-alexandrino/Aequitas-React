import './bancoTalento.css'
import HeaderBanco from "../../componentes/HeaderBanco/HeaderBanco"
import fundoOracle from "../../images/capaoracle.png"
import logoOracle from "../../images/perfiloracle.png"
import line from "../../images/Line.png"
import stars from "../../images/stars.png"
import star from "../../images/Star.png"
import { IoIosSearch } from "react-icons/io";
// import MidBanco from "../../componentes/HeaderBanco/MidBanco"


export default function BancoTalento(){

    return(
        <>

            <div className="containerBancoTalentos">
                <HeaderBanco/>
            <div className="bancotalendo">
            <div className="meio">

                <div className="fundo">
                    <img src={fundoOracle} alt="Fundo Oracle" />
                    </div>

            <div className="perfilOracle">
                <img className='logoEmpresa' src={logoOracle} alt="Perfil" />
                <p className='empresaNome'>Oracle</p>
                <p className="starsRate"> 4,5</p>
                <img className="stars" src={stars} alt="Stars" />

            </div>
            <div className="abas">
                <li className="abasconfig" >Visão Geral</li>
                <li className="abasconfig">Anunciar Vagas</li>
                <li className="abasconfig">Candidatos</li>
                <li className="abasconfig">Vagas</li>
                <li className="abasconfig">Mensagens</li>
                <li className="abasconfig">Banco de Talentos</li>
            </div>
                <img src={line} className="line" alt="Fundo Oracle" />
            <div className="pesquisa">
            <form className='pesquisarVaga'>
                <IoIosSearch size="40px"/>
                <input className='buscar' type="text" placeholder="Digite o nome da vaga" />
                <button className='btnBuscar' type="submit">Buscar</button>
            </form> 


             </div>
        <div className="vagas-container">
            <div className="vagaCard">
                <div className="nota">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Título da Vaga</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="https://www.youtube.com/watch?v=rrTYM82lmiI" target='_blank'><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Título da Vaga</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="https://www.youtube.com/watch?v=rrTYM82lmiI" target='_blank'><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Título da Vaga</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="https://www.youtube.com/watch?v=rrTYM82lmiI" target='_blank'><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Título da Vaga</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="https://www.youtube.com/watch?v=rrTYM82lmiI" target='_blank'><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Título da Vaga</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="https://www.youtube.com/watch?v=rrTYM82lmiI" target='_blank'><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Título da Vaga</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="https://www.youtube.com/watch?v=rrTYM82lmiI" target='_blank'><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Título da Vaga</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="https://www.youtube.com/watch?v=rrTYM82lmiI" target='_blank'><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Título da Vaga</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="https://www.youtube.com/watch?v=rrTYM82lmiI" target='_blank'><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Título da Vaga</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="https://www.youtube.com/watch?v=rrTYM82lmiI" target='_blank'><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Título da Vaga</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="https://www.youtube.com/watch?v=rrTYM82lmiI" target='_blank'><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Título da Vaga</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="https://www.youtube.com/watch?v=rrTYM82lmiI" target='_blank'><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Título da Vaga</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="https://www.youtube.com/watch?v=rrTYM82lmiI" target='_blank'><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Título da Vaga</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="https://www.youtube.com/watch?v=rrTYM82lmiI" target='_blank'><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Título da Vaga</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="https://www.youtube.com/watch?v=rrTYM82lmiI" target='_blank'><button className="VagaEntrar">Entrar</button></a>
            </div>
            <div className="vagaCard">
                <div className="nota">
                <img src={star} alt="" />
                <p>5,0</p>
                </div>
                <h2 className="vagaTitulo">Título da Vaga</h2>
                <p className="vagaLocal">Localização: Cidade, Estado</p>
                <p className="vagaDescri">Há X candidatos no banco de talentos para esta vaga!</p>
                <a href="https://www.youtube.com/watch?v=rrTYM82lmiI" target='_blank'><button className="VagaEntrar">Entrar</button></a>
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
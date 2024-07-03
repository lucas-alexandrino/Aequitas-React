import HeaderPessoa from "../../componentes/HeaderPessoa/HeaderPessoa";
import './QuemSomos.css'
import minorias from '../../images/minoriasunidas.png'
import Titulo from "../../componentes/Titulo/titulo";
import equidade from '../../images/equidade.png'
import significado from '../../images/significadoAE.png'
import logos from '../../images/logos.png'
import participantes1 from  '../../images/participantes1.png'
import participantes2 from '../../images/participantes2.png'
import Membro from "../../componentes/Membros/Membros";
import bruno from '../../images/Bruno.png'
import debora from '../../images/debora.png'
import douglas from '../../images/douglas.png'
import lucas from '../../images/lucas.png'
import luis from '../../images/luis.png'
import luiz from '../../images/luiz.png'
import yasmin from '../../images/yasmin.png'
import yule from '../../images/Yule 1.png'
import Footer from "../../componentes/Footer/footer";
import HeaderEmpressa from "../../componentes/HeaderEmpressa/HeaderEmpressa";
import { useNavigate } from "react-router";







export default function QuemSomos(){
    const navigate = useNavigate();

    const login = () => {
        navigate("/login")
    }
    return (
    <>
    <HeaderEmpressa login={false}/>
     <div className="qsomos">
        <div className="border1">
            <h2>Quem Somos?</h2>
        </div>
        
        <div className="bvindo">
            <p>Bem-vindo à ÆQUITAS, onde acreditamos que a verdadeira inclusão vai Além da Igualdade.</p>
            <img src={minorias} alt="" />
        </div>
        
        <div className="mvv">
            <div className="mv">
                <div className="missao">
                    <Titulo nome="Nossa Missão" color='#FF0000'/>
                    <p className="paragrafos">Nossa missão é criar um mercado de trabalho inclusivo e diversificado, onde todos os grupos minoritários tenham as mesmas oportunidades de sucesso. Buscamos conectar talentos excepcionais a empresas comprometidas com a diversidade.</p>
                </div>
                <div className="visao">
                    <Titulo nome="Nossa Visão" color='#D82D7E'/>
                    <p  id="paragrafo_visao">Sonhamos com um mundo onde cada pessoa, independentemente de sua origem, gênero, raça, orientação ou deficiência, possa alcançar seu potencial máximo em um ambiente de trabalho justo e acolhedor.</p>
                </div>
            </div>
            
            <div className="valores">
                <Titulo nome="Nossos Valores" color='#FA8F21'/>
                <ul id="lista_valores">
                    <li>Inclusão: Valorizamos cada indivíduo e suas experiências únicas.</li>
                    <li>Diversidade: Acreditamos que diferentes perspectivas enriquecem o ambiente de trabalho.</li>
                    <li>Equidade: Lutamos por um tratamento justo e igualitário para todos.</li>
                    <li>Transparência: Operamos com clareza e honestidade.</li>
                    <li>Respeito: Promovemos um ambiente de respeito mútuo e compreensão.</li>
                </ul> 
            </div>
        </div>

        <div className="nossahistoria">
            
            <div className="tituloesub">
                <div className="titulo">
                    <Titulo nome="Nossa História" color='#1A43AA'/>
                    <p>A Aequitas nasceu da necessidade de transformar o mercado de trabalho. Frustrados com a falta de oportunidades para grupos minoritários, decidimos agir. Unimos forças para criar uma plataforma que não só divulga vagas, mas também promove a equidade e o respeito.</p>
                </div>
            </div>
            
            <div className="origem">
                <h5>Origem</h5>
                <div className="equidade">
                    <img className="a" src={equidade} alt="" />
                    <img className="b" src={significado} alt="" />
                </div>
            </div>

            <div className="logos">
                <div className="slogan">
                    <p>Slogan:</p>
                    <h5>Além da Igualdade</h5>
                </div>

                <div className="logosa">
                    <p className="a">Logos alternativos</p>
                    <p className="b">Essas versões de logo podem ser usadas para combinar uma variedade de materiais e aplicações.</p>
                </div>
                <img src="src/images/setas.png" alt="" />
                <img src="src/images/logoss.png" alt="logos do équitas" />
                <div className="divisao"></div>
            </div>

            <div className="paletas">
                <div className="tituloesubpaletas">
                    <h5>Paleta de Cores da Marca</h5>
                    <p>Essas cores refletem a identidade e a personalidade da marca.</p>
                </div>
                <div className="paletasimg">
                    <div className="hashs">
                        <p>#07163F</p>
                        <p>#1A43AA</p>
                        <p>#FFFFFF</p>
                    </div>
                </div>                    
            </div>
            <div className="divisao"></div>

            <div className="fontes">
                <div className="guiafontes">
                    <h4>Guias de fontes</h4>
                    <p className="a">As fontes são mais eficazes quando combinadas e dimensionadas corretamente.</p>
                    <p className="titulogrande">Título Grande</p>
                    <p className="sub">Subtítulo</p>
                    <p className="b">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit ipsum quam, quis convallis tellus gravida ut. Donec commodo interdum magna.</p>
                </div>
                
                <div className="divisaovertical"></div>

                <div className="fontesuso">
                    <h4>Fontes em uso</h4>
                    <p>Essas fontes foram criadas especificamente para a marca.</p>
                    <div className="tipofontes"> 
                        <div className="davidlibre">
                            <p className="a">Aa</p>
                            <p className="b">David Libre</p>
                            <p className="c">ABCDEFGHIJKLMNOPQRST UVWXYZabcdefghijklmnop qrstuvwxyz1234567890! @#$%^&*()</p>
                        </div>

                        <div className="inter">
                            <p className="a">Aa</p>
                            <p className="b">Inter</p>
                            <p className="c">ABCDEFGHIJKLMNOPQRST UVWXYZabcdefghijklmnop qrstuvwxyz1234567890! @#$%^&*()</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

        <div className="nossaequipe">
            <div className="partecima">
                <div className="tituloesub2">
                    <div className="titulo2">
                        <Titulo nome='Nossa Equipe' color='#1A43AA' />
                        <p>Nossa equipe é composta por profissionais que prezam pela inclusão e diversidade.</p>
                    </div>            
                </div>

                <div className="fotos">
                    <Membro foto={bruno} nome='Bruno' color='#1877F2' descricao='Scrum Master e Full Stack' />
                    <Membro foto={debora} nome='Débora' color='#D82D7E' descricao='Front End, Designer e Social Media' />
                    <Membro foto={douglas} nome='Douglas' color='#9B21FA' descricao='Full Stack' />
                    <Membro foto={lucas} nome='Lucas' color='#FA8F21' descricao='Full Stack' />
                </div>
            </div>

            <div className="partebaixo">
                 
                <div className="fotos2">
                    <Membro foto={luis} nome='Luis' color='#1877F2' descricao='Back End' />
                    <Membro foto={luiz} nome='Luiz' color='#D82D7E' descricao='Front End' />
                    <Membro foto={yasmin} nome='Yasmin' color='#9B21FA' descricao='Financeiro e Banco de dados' />
                    <Membro foto={yule} nome='Yule' color='#FA8F21' descricao='Product owner e Banco de dados' />
                </div>
            
            </div> 
        </div>
        <div className="junte-se">
            <div className="titulo-junte-se">
                <Titulo nome='Junte-se a Nós' color='#1A43AA'/>
                <p>Participe desta jornada para um futuro mais inclusivo. Quer você seja uma empresa ou um candidato, há um lugar para você na Aequitas.</p>
            </div>
            <button className="login" onClick={login}>Login</button>
        </div>
     </div>
     <Footer />
    
    </>
)
}
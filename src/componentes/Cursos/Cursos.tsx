import './Cursos.css';

import { FaFingerprint } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";

import logo from "../../images/Logo_aequitas.png";

function Cursos() {
  return (
    <>
 <div className="cabecalho">

 <a href='/'><img src={logo} alt="logo aequitas " id="logosite" /></a>  
  <a href='/perfilusuario'><h3 id="area_candidato"> Área do Candidato</h3></a>

    </div>
      
        <div className="CadastroCv">
          <div className='dadosTitulo'>
          <h2><FaFingerprint color='rgb(122, 122, 238)'/> Olá  nessa area da Aequitas, você pode conhecer cursos
          para desenvolvimento tecnico para conseguir aquela tão sonhada vaga.
          Não se preocupe todas os cursos listados são gratuitos e passaram por nossa certificação de para não cair em casos de so pagar o "material".  </h2>
          </div>
          
          
          <div className='Cv'>
          <h2> <FaAddressCard size={23}/> Tecnologia </h2>
          </div>
            <table className='especificacoes'>
                <tr>
                  <div className='alinhamentoTexto'>
                    <h3>Instituto PROA</h3> 
                    <h4>Curso de programação com certificação pelo Senac</h4>
                    <p>você precisa realizar um processo seletivo para participar, mas vale a pena cada segundo que voce se dedica.</p>
                  </div>
                  <a href='https://www.proa.org.br/proprofissao/'><button className='curriculoB'>Acessar site oficial</button></a>
                </tr>     
            </table>
            <p><table className='Objetivo'>
                <tr><div className='alinhamentoTexto'>
                  <h3>Generation Brasil</h3>
                  <h4>Curso de programação com certificação pelo Senac</h4>
                  </div>
                  <a href='https://brazil.generation.org'><button className='curriculoB'>Acessar site oficial</button></a>
                </tr>     
            </table></p>
            <p><table className='Formacao'>
                <tr>
                  <div className='alinhamentoTexto'>
                  <h3>Formações Acadêmicas</h3> 
                  </div>                  
                 <p> <a href='https://brazil.generation.org'><button className='curriculoB'>Acessar site oficial</button></a></p>
                </tr>     
            </table></p>
            <p><table className='curso'>
                <tr><div className='alinhamentoTexto'>
                  <h3>Cursos e Especializações</h3>
                  </div>
                <p><a href='https://brazil.generation.org'><button className='curriculoB'>Acessar site oficial</button></a></p>
                </tr>     
            </table></p>
            <p><table className='Idioma'>
                <tr><div className='alinhamentoTexto'>
                  <h3>Idiomas</h3>
                  </div>
                <p><a href='https://brazil.generation.org'><button className='curriculoB'>Acessar site oficial</button></a></p>
                </tr>     
            </table></p>
            <p><table className='Competencias'>
                <tr><div className='alinhamentoTexto'>
                  <h3>Competências</h3>
                  </div>
                <p><a href='https://brazil.generation.org'><button className='curriculoB'>Acessar site oficial</button></a></p>
                </tr>     
            </table></p>
            <p><table className='Informacoes'>
                <tr><div className='alinhamentoTexto'>
                  <h3>Informações Adicionais</h3></div>
                <p><a href='https://brazil.generation.org'><button className='curriculoB'>Acessar site oficial</button></a></p>
                </tr>     
            </table></p>
      
        
        
    </div>
</>
  );
}

export default Cursos;

import './Curriculos.css';

import { MdEmail } from "react-icons/md";

import { FaFingerprint } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";

import logo from "../../images/Logo_aequitas.png";
import { Grid } from '@mui/material';
import { MdPerson } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdPlace } from "react-icons/md";

function Curriculo() {
  return (
    <>
 <div className="cabecalho">
  <a href='/'><img src={logo} alt="logo aequitas " id="logosite" /></a>  
  <a href='/perfilusuario'><h3 id="area_candidato"> Área do Candidato</h3></a>
    </div>
      
    <div className="CadastroCv">
  <div className='dadosTitulo'>
    <h2><FaFingerprint color='rgb(122, 122, 238)' /> Seus dados</h2>
    <p id="titulo_curriculo"> Mantenha sempre atualizados. A Aequitas e os recrutadores usam essas informações para entrar em contato com você.</p>
  </div>

    <Grid item xs={9}>
    <div className='dados-pessoais'>
        <div id='dados'>
        <h3> Dados Pessoais</h3>
        <p><MdPerson /> Nome Completo</p>
        <p><MdEmail /> E-mail</p>
        <p><FaPhone /> Telefone</p>
        <p><MdPlace /> Localização</p>
        </div>
        <button id='btn-dados-pessoais'>Atualizar dados pessoais</button>
    </div>



    </Grid>



  <div className='Cv'>
    <h2> <FaAddressCard size={23} /> Seu Currículo </h2>
  </div>

  <Grid container spacing={2}>
    <Grid item xs={12}>
      <div className='especificacoes'>
        <div className='alinhamentoTexto'>
          <h3 id="titulo_atributos">Objetivo Profissional</h3>
          
          <p>Cargo de Interesse</p>
          <p>Pretensão Salarial</p>
        </div>
        <a href='/curriculo'><button className='btn-curriculo'>Editar Objetivo</button></a>
      
      </div>
    </Grid>
    
    <Grid item xs={12}>
      <div className='Objetivo'>
        <div className='alinhamentoTexto'>
          <h3 id="titulo_atributos">Experiência profissional</h3>
          <h4 id='btn-editar'>Editar</h4>      
        </div>
        <a href='/curriculo'><button className='btn-curriculo'>Adicionar Experiência</button></a>
      </div>
    </Grid>
    
    <Grid item xs={12}>
      <div className='Formacao'>
        <div className='alinhamentoTexto'>
          <h3 id="titulo_atributos">Formações Acadêmicas</h3>
        </div>
        <a href='/curriculo'><button className='btn-curriculo'>Adicionar Formação</button></a>
      </div>
    </Grid>
    
    <Grid item xs={12}>
      <div className='curso'>
        <div className='alinhamentoTexto'>
          <h3 id="titulo_atributos">Cursos e Especializações</h3>
        </div>
        <a href='/curriculo'><button className='btn-curriculo'>Adicionar Curso</button></a>
      </div>
    </Grid>
    
    <Grid item xs={12}>
      <div className='Idioma'>
        <div className='alinhamentoTexto'>
          <h3 id="titulo_atributos">Idiomas</h3>
        </div>
        <a href='/curriculo'><button className='btn-curriculo'>Adicionar Idioma</button></a>
      </div>
    </Grid>
    
    <Grid item xs={12}>
      <div className='Competencias'>
        <div className='alinhamentoTexto'>
          <h3 id="titulo_atributos">Competências</h3>
        </div>
        <a href='/curriculo'><button className='btn-curriculo'>Adicionar Competência</button></a>
      </div>
    </Grid>
    
    <Grid item xs={12}>
      <div className='Informacoes'>
        <div className='alinhamentoTexto'>
          <h3 id="titulo_atributos">Informações Adicionais</h3>
        </div>
        <a href='/curriculo'><button className='btn-curriculo'>Editar informações</button></a>
      </div>
    </Grid>
  </Grid>

  <div className='rodape-curriculo'>
  <div id='div-btn-finalizar'></div> <a href='https://docs.google.com/document/d/1K2u8yFgbDcu2iNKHrgFvL-3Sk4S-_DDWZKDsU3_EkA4/edit?usp=sharing' target='_blank' ><button id='btn-finalizar'>Finalizar</button> </a> 
    <h5>@ ÆQUITAS  Todos os direitos reservados.</h5>
  </div>
</div>
</>
  );
}

export default Curriculo;

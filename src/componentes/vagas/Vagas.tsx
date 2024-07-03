import { useState } from "react";
import "./Vagas.css";
import "../vagasampliada/VagasAmpliada.css";
import { Grid } from "@mui/material";
import { FaBuilding, FaStar } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

export default function Vagas() {
  // Interface para definir o tipo das vagas
  interface Vaga {
    id: number;
    titulo: string;
    empresa: string;
    local: string;
    salario?: string;
    localidade?: string;
    beneficios?: string;
    horario?: string;
    contratacao?: string;
    atividades?: string;
  }

  // Estado para a vaga ativa, tipificado com a interface Vaga ou null
  const [vagaAtiva, setVagaAtiva] = useState<Vaga | null>(null);

  // Vetor de vagas tipificado com a interface Vaga
  const vagas: Vaga[] = [
    { 
      id: 1, 
      titulo: "Jornalista Multimídia", 
      empresa: "BJ JORNAL", 
      local: "São Paulo, SP",
      salario: "R$1.000,00 a R$2.000,00",
      localidade: "Presencial",
      beneficios: "Assistência Médica, Tíquete Refeição, Restaurante na empresa, Vale Transporte",
      horario: "8h às 14h",
      contratacao: "Temporário",
      atividades: "Tarefas administrativas (preenchimento relatório, montagem de planilhas) - Separação de malotes - Atendimento a colaboradores - Atendimento de chamados via sistema - Atendimento recepção - Organização das salas - Executará diariamente processos que utilizarão o Pacote Office (Excel, Word e PowerPoint) Proatividade, organização, conhecimento em Excel/Pacote Office Desejável Técnico em RH ou Administração"
    },
    { 
      id: 2, 
      titulo: "Repórter Investigativa", 
      empresa: "Empresa confidencial", 
      local: "São Paulo, SP",
      salario: "R$3.000,00 a R$5.000,00",
      localidade: "Presencial",
      beneficios: "Assistência Médica, Assistência Odontológica, Seguro de Vida, Vale Transporte",
      horario: "9h às 18h",
      contratacao: "CLT",
      atividades: "Investigação de casos, redação de reportagens investigativas, entrevistas, trabalho em equipe com outros jornalistas e editores, viagens para apuração de casos."
    },
    { 
      id: 3, 
      titulo: "Editor de Notícias Online", 
      empresa: "The New York Times", 
      local: "Nova Iorque, EUA",
      salario: "US$4.000,00 a US$6.000,00",
      localidade: "Remoto",
      beneficios: "Plano de Saúde, Plano Odontológico, Vale Refeição, Vale Transporte",
      horario: "Flexível",
      contratacao: "Full-time",
      atividades: "Edição de notícias para publicação online, gerenciamento de equipe de redatores, revisão de conteúdo, coordenação de publicações em redes sociais."
    },
    { 
      id: 4, 
      titulo: "Especialista em Dados e Jornalismo", 
      empresa: "CNN", 
      local: "São Paulo, SP",
      salario: "R$5.000,00 a R$7.000,00",
      localidade: "Presencial",
      beneficios: "Assistência Médica, Assistência Odontológica, Vale Refeição, Vale Transporte, Previdência Privada",
      horario: "9h às 18h",
      contratacao: "CLT",
      atividades: "Análise de grandes volumes de dados, criação de visualizações de dados, apoio à equipe editorial com insights baseados em dados, desenvolvimento de reportagens baseadas em dados."
    },
    { 
      id: 5, 
      titulo: "Tradutora de Conteúdo Jornalístico", 
      empresa: "Folha de S.Paulo", 
      local: "São Paulo, SP",
      salario: "R$2.500,00 a R$4.000,00",
      localidade: "Híbrido",
      beneficios: "Assistência Médica, Assistência Odontológica, Vale Refeição, Vale Transporte, Home Office",
      horario: "Flexível",
      contratacao: "PJ",
      atividades: "Tradução de artigos jornalísticos do inglês para o português, adaptação cultural de conteúdo, colaboração com editores e jornalistas, revisão de textos traduzidos."
    },
    { 
      id: 6, 
      titulo: "Repórter de Cultura e Entretenimento", 
      empresa: "El País", 
      local: "Barcelona, ESP",
      salario: "€2.000,00 a €3.500,00",
      localidade: "Presencial",
      beneficios: "Plano de Saúde, Plano Odontológico, Vale Refeição, Vale Transporte, Seguro de Vida",
      horario: "10h às 19h",
      contratacao: "Full-time",
      atividades: "Cobertura de eventos culturais e de entretenimento, entrevistas com artistas e personalidades, redação de artigos e reportagens, colaboração com a equipe editorial."
    }
  ];

  // Definindo o tipo do parâmetro vaga
  const handleClick = (vaga: Vaga) => {
    setVagaAtiva(vaga);
  };

  return (
    <>
      {!vagaAtiva ? (
        <Grid container direction={'row'}>
          {vagas.map((vaga) => (
            <Grid item lg={4} md={6} sm={12} key={vaga.id} onClick={() => handleClick(vaga)}>
              <div className="background_vaga">
                <h1>{vaga.titulo}</h1>
                <h3><FaStar color='yellow' />{vaga.empresa}</h3>
                <p>{vaga.local}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container>
          <Grid item lg={4} md={4} sm={12}>
            <div className="sidebar_vagas">
              {vagas.map((vaga) => (
                <div key={vaga.id} className="background_vaga" onClick={() => handleClick(vaga)}>
                  <h1>{vaga.titulo}</h1>
                  <h3><FaStar color='yellow' />{vaga.empresa}</h3>
                  <p>{vaga.local}</p>
                </div>
              ))}
            </div>
          </Grid>
          <Grid item lg={8} md={12} sm={12}>
            <div className="container_ampliada vaga_ampliada">
              <div className="cabecalho_vaga">
                <h1>{vagaAtiva.titulo}</h1>
                <p id="empresa_vaga"><FaStar color='yellow' />{vagaAtiva.empresa}</p>
                <p>{vagaAtiva.local}</p>
                <p>{vagaAtiva.salario}</p>
                <p><FaBuilding /> {vagaAtiva.localidade}</p>
                <button id="btn-candidatar"><h2>Quero me Candidatar</h2></button>
                <IoIosShareAlt size={25} color="0e44cc" />
              </div>
              <div className="atributos_vaga">
                <p id="titulos_atributos">Principais Atividades</p>
                <p>{vagaAtiva.atividades}</p>
                <br></br>
                <div className="atributos_contratação">
                  <div className="beneficios">
                    <p id="titulos_atributos">Benefícios</p>
                    <p>{vagaAtiva.beneficios}</p>
                  </div>
                  <div className="horario_regime">
                    <p id="titulos_atributos">Horário</p>
                    <p>{vagaAtiva.horario}</p>
                    <p id="titulos_atributos">Regime de Contratação</p>
                    <p>{vagaAtiva.contratacao}</p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      )}
    </>
  );
}



/*               
 <Row>
  <Col xs={12} sm={3} md={2} lg={1} />
  <Col xs={6} sm={6} md={8} lg={10} />
  <Col xs={6} sm={3} md={2} lg={1} />
</Row>


   {posts.map((post) => (
         
         <Grid container  direction={'column'} >
           <Grid item xs={2}/>
           
           <Grid item xs={4}  >
             <Box m={2}>
               <Card variant="outlined" className="posts"   >
                 <CardContent className="item-post">
                   
                   <Typography color="textSecondary" 
                   gutterBottom variant="h5" className="titulo-txt"> 
                     {post.atendimento}
                   </Typography>

                   <Typography  component="h2" className="txt-postagens">
                     {post.informacoes}
                   </Typography>

                   <Typography variant="body2" component="p" className="txt-postagens">
                   <FavoriteBorderIcon /> Eu sou: {post.tipo_profissional}
                   </Typography>
                   
                   <Typography>Modalidade: {post.modalidade_categoria}</Typography>
 
                   <Typography>Avaliação: {post.avaliacao}</Typography> 
 
                  
                   <CardMedia 
                   component="img"
                   alt="imagem post"
                   height="210"
                   image={post.image_link}> 
                   </CardMedia>
                  
 
                   <Typography variant="body2" component="p" className="txt-postagens-tema">
                     #{post.tema?.descricao}
                   </Typography>
                  
                  <Box display="flex" justifyContent="center" mb={1.5}>
                     <Link
                       to={`/formularioPostagem/${post.id}`}
                       className="text-decorator-none"
                     >
                       <Box mx={1} >
                         <Button
                           variant="contained"
                           className="btn-postagem"
                           size="small"
                           color="primary"
                         >
                           atualizar
                         </Button>
                       </Box>
                     </Link>
                     <Link
                       to={`/deletarPostagem/${post.id}`}
                       className="text-decorator-none"
                     >
                       <Box mx={1}>
                         <Button
                           variant="contained"
                           size="small"
                           color="secondary"
                           className="btn-postagem">
                           deletar
                         </Button>
                       
            
                       </Box>
                     </Link>
                   </Box>
                 </CardContent>
                 
               </Card>
             </Box>
             
           </Grid>
           <Grid item xs={2}/>
           </Grid>

   )

*/
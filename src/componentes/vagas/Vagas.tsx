import React from "react";
import { useState } from "react";
import "./Vagas.css";
import { Box, Container, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { FaStar } from "react-icons/fa6";
// import Postagem from "../../../model/Postagem";

export default function Vagas() {
  
    const [vagaAtiva, setVagaAtiva] = useState(false);

   //  const [vagas, setVagas] = useState<Postagem[]>([]); | Vetor de vagas

   /*  Esboço de vaga ampliada TENTAR COLOCAR NO MEIO
    
   // RESUMO: ONCLICK = TRANSFORMAR TODAS AS VAGAS EM TAMANHO 3 OU MENOR, E showVagaMaior ,deixar a vaga maior aparente. 
   
         <div className={`vaga-ampliada ${vagaAtiva ? 'ativa' : ''}`}>
            <Grid container direction={'row'}>

              <Grid item lg={8} md={12} sm={12}>
                <div className="background_vaga">
                  <h1>teste</h1>
                </div>
              </Grid>


            </Grid>


            </div>
            */

    return (

        <>
        
           
        <Grid container direction={'row'} onClick={() => { setVagaAtiva(!vagaAtiva); }}>

<Grid item lg={4} md={6} sm ={12} >
    
 <div className="background_vaga"><h1> Jornalista Multimídia</h1>
 <h3><FaStar color='yellow'/>BJ JORNAL</h3>
 <p>São Paulo, SP</p>
 </div>

    </Grid> 
    <Grid item lg={4} md={6} sm ={12} >
    
    <div className="background_vaga"><h1> Repórter Investigativa</h1>
    <h3><FaStar color='yellow'/> Empresa confidencial</h3>
     <p>São Paulo, SP</p>
    </div>
   
       </Grid> 
       <Grid item lg={4} md={6} sm ={12} >
    
      <div className="background_vaga"><h1> Editor de Notícias Online</h1>
    <h3><FaStar color='yellow'/> The New York Times</h3>
     <p>Nova Iorque, EUA</p>
    </div>
   
       </Grid> 
       
       <Grid item lg={4} md={6} sm ={12} >
    
       <div className="background_vaga"><h1> Especialista em Dados e Jornalismo</h1>
    <h3><FaStar color='yellow'/> CNN</h3>
     <p>São Paulo, SP</p>
    </div>
   
       </Grid> 

       <Grid item lg={4} md={6} sm ={12} >
    
       <div className="background_vaga"><h1>Tradutora de Conteúdo Jornalístico</h1>
      <h3><FaStar color='yellow'/>Folha de S.Paulo</h3>
      <p>São Paulo, SP</p>
      </div>
   
       </Grid> 
       <Grid item lg={4} md={6} sm ={12} >
    
       <div className="background_vaga"><h1>Repórter de Cultura e Entretenimento</h1>
    <h3><FaStar color='yellow'/> El País</h3>
     <p>Barcelona, ESP</p>
    </div>
    
                       
       </Grid> 
       


</Grid>


            
      

        
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
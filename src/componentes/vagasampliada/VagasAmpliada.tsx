import React from "react";
import { useState } from "react";
import "./VagasAmpliada.css";
import { Box, Container, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { FaStar } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

/*

Fazer uma vaga ampliada
Fazer com que a vaga ampliada apareça e desapareça na tela
RESUMO: ONCLICK = TRANSFORMAR TODAS AS VAGAS EM TAMANHO 3 OU MENOR, E showVagaMaior ,deixar a vaga maior aparente. 

Extra: Fazer a mesma fução onclick mudar o header.

*/

export default function VagasAmpliada() {
    const [vagaAtiva, setVagaAtiva] = useState(false);
    return (

        <>

            <Grid container direction={'row'}>

                <Grid item lg={8} md={12} sm={12}>

                    <div className="container_ampliada">
                        <div className="cabecalho_vaga">
                            <h1>Operador Jovem Aprendiz</h1>
                            <p id="empresa_vaga">Empresa confidencial </p>
                            <p> 2 Vagas: São Paulo - SP</p>
                            <p>R$1.000,00 a R$2.000,00 (Bruto Mensal)</p>
                            <p><FaBuilding /> Presencial</p>
                            <button id="botao"> <h2>Quero me Candidatar</h2></button>
                            <IoIosShareAlt size={25} color="0e44cc" />
                        </div>
                        <div className="atributos_vaga">
                            <p id="titulos_atributos">Principais Atividades</p>
                            <p>Tarefas administrativas (preenchimento  relatório, montagem de planilhas); - Separação de malotes; - Atendimento  a colaboradores; -Atendimento de chamados via sistema; -Atendimento  recepção; -Organização das salas; -Executará diariamente processos que  utilizarão o Pacote Office (Excel, Word e PowerPoint);" "Proatividade,  organização, conhecimento em Excel/Pacote Office Desejável Técnico em RH  ou Administração</p>
                            <br></br>
                            <div className="atributos_contratação">

                                <div className="beneficios">
                                    <p id="titulos_atributos">Benefícios</p>
                                    <p>Assistência Médica, Tíquete Refeição, Restaurante na empresa, Vale Transporte</p>
                                </div>
                                <div className="horario_regime">
                                    <p id="titulos_atributos">Horário</p>
                                    <p>8h às 14h</p>
                                    <p id="titulos_atributos">Regime de Contratação</p>
                                    <p>Temporário</p>
                                </div>

                            </div>
                        </div>
                    </div>


                </Grid>



            </Grid>



        </>
    )
}
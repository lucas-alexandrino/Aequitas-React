
import { useState } from "react";

import './Perfil.css';
// Icons
import { BiHome } from "react-icons/bi";
import { IoDocumentText } from "react-icons/io5";
import { PiClockCounterClockwiseLight } from "react-icons/pi";
import { GoGear } from "react-icons/go";
import { GiPadlock } from "react-icons/gi";
import { FaTrash } from "react-icons/fa";
import { TbHelpCircleFilled } from "react-icons/tb";
import { TbClipboardCheck } from "react-icons/tb";
import { FaListCheck } from "react-icons/fa6";
import { ImExit } from "react-icons/im";



export default function Perfil() {
    const [perfilAtivo, setPerfilAtivo] = useState(false);
   //  const [vagas, setVagas] = useState<Postagem[]>([]); | Vetor de vagas
    //   z-index: 999; /* Para sobrepor ao conteúdo da página */
    
   return (

        <>
        
        <div className={`painelLateral ${perfilAtivo ? 'ativo' : ''}`}>
              <div className="header-perfil">
              <img id ="foto-perfil" src="../src/assets/Fotousuario.png" alt="foto" ></img>
              <div className="perfil">
             <h4> Samuel Marques</h4>
                <p>samuel.marques@gmail.com</p>
              </div>
               
              </div>
              <div className="body-perfil">
            
              <h4> <BiHome size={25}/> Meu Perfil</h4>
              <h4> <IoDocumentText size={25} /> Meu currículo</h4>
              <h4> <PiClockCounterClockwiseLight size={25} /> Minhas vagas</h4>
     
              </div>
              <div className="config-opcoes">
              <h4> <GoGear size={25}/> Configurações</h4>
              <h4> <GiPadlock size={25} /> Alterar senha</h4>
              <h4> <FaTrash size={25} /> Excluir conta</h4>
  
             </div>
             <div className="ajuda-opcoes">
             <h4> <TbHelpCircleFilled size={25}  /> Central de Ajuda</h4>
             <h4> <TbClipboardCheck size={25}  /> Termo de Uso</h4>
             <h4> <FaListCheck  size={25} /> Politica de Privacidade</h4>
             </div>
             <div className="encerrar-sessao">
              <h3> <ImExit size={20}/> Encerrar sessão</h3>
             </div>

            </div>

        </>
    );

}



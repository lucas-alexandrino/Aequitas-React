import Cadastro from "../../componentes/cadastro/cadastro.tsx"
import Cadastro2 from "../../componentes/cadastro2/cadastro2.tsx"
import Cadastro3 from "../../componentes/cadastro3/cadastro3.tsx"
import HeaderEmpressa from "../../componentes/HeaderEmpressa/HeaderEmpressa.tsx"

export default function AnunciarVagas(){

    return(
        <>
        <HeaderEmpressa login={true}/>
        <Cadastro/>
        <Cadastro2 />
        <Cadastro3 />

            </>
        )
}
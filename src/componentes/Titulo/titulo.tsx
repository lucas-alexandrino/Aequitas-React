import './titulo.css'

interface TituloProps {
    color: string;
    nome: string;
  }
  

export default function Titulo(props: TituloProps){
    return(
    <>
        <div className="titulo0">
            <h4 style={{color: props.color}}>{props.nome}</h4>
            <div className="linha" style={{backgroundColor: props.color}}></div>
        </div>

    </>
)
}
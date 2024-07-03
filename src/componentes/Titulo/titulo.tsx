import './titulo.css'

export default function Titulo(props){
    return(
    <>
        <div className="titulo0">
            <h4 style={{color: props.color}}>{props.nome}</h4>
            <div className="linha" style={{backgroundColor: props.color}}></div>
        </div>

    </>
)
}
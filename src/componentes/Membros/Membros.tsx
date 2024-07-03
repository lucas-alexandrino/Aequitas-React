import './Membros.css'

interface MembroProps {
    foto: string;
    nome: string;
    color: string;
    descricao: string;
}

export default function Membro(props: MembroProps) {
    return(
        <>
        <div className="membros">
            <div className="membro">
                <img src={props.foto} alt="" />
                <div className="titulo">
                    <h4 style={{color: props.color}}>{props.nome}</h4>
                    <div className="linha_membros" style={{backgroundColor: props.color}}></div>
                </div>
                <p id='paragrafo_membros'>{props.descricao}</p>
            </div>    
        </div>
        </>
    )
}
import './MiniCurriculo.css'
import { FaFileContract } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";

export default function MiniCurriculo(props : any) {
    return (
        <>
            <div className="curriculoaequitas">
                <div className='curriculo_aequitas'>
                    <div className="contrato">
                        <FaFileContract size={62} color='grey' />
                    </div>
                    <div className="centro">
                        <h5>{props.titulo}</h5>
                        <p>Atualizado em 26/04/2024</p>
                        <div className="olho">
                            <IoMdEye size={25} />
                            <p>Visível</p>
                        </div>
                    </div>
                    <div className="seta">
                        <MdArrowForwardIos size={35} color='grey' />
                    </div>
                </div>
            </div>
        </>
    )

}
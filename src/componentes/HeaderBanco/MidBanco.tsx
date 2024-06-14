import "./midBanco.css"
import fundoOracle from "../../images/capaoracle.png"
import logoOracle from "../../images/perfiloracle.png"
import line from "../../images/Line.png"
export default function MidBanco() {

    return (
        <>
        {}
            {
                
            <div className="meio">

                <div className="fundo">
                    <img src={fundoOracle} alt="Fundo Oracle" />
                    </div>

               <div className="perfilOracle">
                <img src={logoOracle} alt="Perfil" />
                <p>Oracle</p>
                </div>
                <img src={line} className="line" alt="Fundo Oracle" />
            </div>
            }
        </>
    );
}
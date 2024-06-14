import "../jogos/jogos.css"
import Mago from "../images/davy.jpg"
import Game1 from "../images/davy.jpg"
export default function HeaderBanco() {

    return (
        <>
        {}
            {
                <div className="background">

                <div className="headerBancoContainer">
                    <h1 className="aequitas">
                        ÆQUITAS
                    </h1>
                    <div className="forBusiness">
                    <h6 className="aegames">
                        GAMES "Essa é a diferença de um fã pra um fanboy"
                    </h6>
                        <img className="mago" src={Mago} alt="mago" />
                    </div>
                    <div className="games">
                        <img className="game1" src={Game1} alt="" />
                        <img className="game2" src={Game1} alt="" />
                        <img className="game3" src={Game1} alt="" />
                        <img className="game4" src={Game1} alt="" />
                    </div>
                    </div>
                   
                </div>
                
            }
        </>
    );
}
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <>
        <div className="footerContainer">
        <footer className="rodape">
        
        <ul className="lista-rodape">
            <li className="lista-rodape__titulo">Institucional</li>

            <li className="lista-rodape__item">
            <Link to='/sobre' className="lista-rodape__link">Quem somos?</Link>
            </li>

            <li className="lista-rodape__item">
            <Link to='/' className="lista-rodape__link">Por que usar ÆQUITAS</Link>
            </li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Acessibilidade no ÆQUITAS</a>
            </li>

            <li className="lista-rodape__item">
            <Link to='/' className="lista-rodape__link">Fale conosco</Link>
            </li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Termos</a>
            </li>

        </ul>

        <ul className="lista-rodape">
            <li className="lista-rodape__titulo">Empresas</li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Ajuda</a>
            </li>

            <li className="lista-rodape__item">
           <Link to='/anunciar' className="lista-rodape__link">Anunciar vagas</Link>
            </li>

            <li className="lista-rodape__item">
           <Link to='/talentos' className="lista-rodape__link">Buscar candidatos</Link> 
            </li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Política de privacidade</a>
            </li>

        </ul>

        <ul className="lista-rodape">
            <li className="lista-rodape__titulo">Candidatos</li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Ajuda</a>
            </li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Política de privacidade</a>
            </li>

            <li className="lista-rodape__item">
            <Link to='/vagas' className="lista-rodape__link" >Vagas</Link> 
            </li>

            <li className="lista-rodape__item">
            <Link to='/curriculo' className="lista-rodape__link">Cadastre seu currículo</Link>
            </li>

        </ul>

        <ul className="lista-rodape">
            <li className="lista-rodape__titulo">Siga-nos</li>

            <li className="lista-rodape__item">
            <a href="#" className="lista-rodape__link">Ajuda</a>
            </li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Política de privacidade</a>
            </li>

            <li className="lista-rodape__item">
            <Link to='/vagas' className="lista-rodape__link" >Vagas</Link> 
            </li>

            <li className="lista-rodape__item">
             <Link to='/curriculo' className="lista-rodape__link">Cadastre seu currículo</Link>
            </li>

        </ul>
    </footer>
        </div>
        </>
    )
}

export default Footer;
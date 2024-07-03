const Footer = () => {
    return(
        <>
        <div className="footerContainer">
        <footer className="rodape">
        
        <ul className="lista-rodape">
            <li className="lista-rodape__titulo">Institucional</li>

            <li className="lista-rodape__item">
                <a href="/sobre" className="lista-rodape__link">Quem somos?</a>
            </li>

            <li className="lista-rodape__item">
                <a href="/" className="lista-rodape__link">Por que usar ÆQUITAS</a>
            </li>

            <li className="lista-rodape__item">
                <a href="#" className="lista-rodape__link">Acessibilidade no ÆQUITAS</a>
            </li>

            <li className="lista-rodape__item">
                <a href="/" className="lista-rodape__link">Fale conosco</a>
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
                <a href="/anunciar" className="lista-rodape__link">Anunciar vagas</a>
            </li>

            <li className="lista-rodape__item">
                <a href="/talentos" className="lista-rodape__link">Buscar candidatos</a>
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
                <a href="/vagas" className="lista-rodape__link">Vagas</a>
            </li>

            <li className="lista-rodape__item">
                <a href="/curriculo" className="lista-rodape__link">Cadastre seu currículo</a>
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
                <a href="/vagas" className="lista-rodape__link">Vagas</a>
            </li>

            <li className="lista-rodape__item">
                <a href="/curriculo" className="lista-rodape__link">Cadastre seu currículo</a>
            </li>

        </ul>
    </footer>
        </div>
        </>
    )
}

export default Footer;

import './cadastro.css';


function cadastro() {
    return (
      <main className="main-content">
            
            <h1 id='titulo'>Insira detalhes essenciais sobre a vaga.</h1>
        <form >
          <div className="form-group">
                <label htmlFor="nome-empresa"><b>Nome da empresa</b></label>
                <input type="text" id="nome-empresa" name="nome-empresa"></input>
            </div>
            <div className="form-group">
                <label htmlFor="numero-funcionarios"><b>Número de funcionários da empresa</b></label>
                <select id="numero-funcionarios" name="numero-funcionarios">
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="501-1000">501-1000</option>
                    <option value="1000+">1000+</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="nome"><b>Seu nome e sobrenome</b></label>
                <input type="text" id="nome" name="nome"></input>
            </div>
            <div className="form-group">
                <label htmlFor="como-soube"><b>Como você soube sobre nós</b></label>
                <input type="text" id="como-soube" name="como-soube"></input>
            </div>
            <div className="form-group">
                <label htmlFor="telefone"><b>Seu número de telefone</b></label>
                <input type="tel" id="telefone" name="telefone"></input>
            </div>
            
            <button id='botao' type="submit"><b>Continue</b></button>

            
        </form>
          
        
    </main>
  );
}

export default cadastro;
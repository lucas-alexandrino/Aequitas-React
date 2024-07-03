import HeaderEmpressa from "../../componentes/HeaderEmpressa/HeaderEmpressa";
import { FcGoogle } from "react-icons/fc";
import persona from "../../images/PersonaEmpresa.png";
import wave from "../../images/WaveEmpresa.png";
import { IoLogoLinkedin } from "react-icons/io";
import "./cadastroEmpresa.css";
import { useForm } from "react-hook-form";
import { z } from "zod"; 
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useNavigate } from "react-router-dom";


type criarEmpresaDados = z.infer <typeof criarEmpresaEsquema>

const criarEmpresaEsquema = z.object({
    nomeEmpresa: z.string()
    .nonempty("o nome da empresa não pode estar vazio"),

    cnpj: z.string()
    .nonempty("o CNPJ não pode estar vazio"),

    telefoneFixo: z.string()
    .nonempty("O telefone não pode ficar vazio"),

    email: z.string()
    .nonempty("O email não pode estar vazio")
    .email("Formato do email invalido"),

    senha: z.string()
    .nonempty("A senha não pode ficar vazia")
    .min(6, "A senha deve ter no mínimo 6 caractéres"),

    confirmarSenha: z.string()
    .nonempty("A confirmação da senha não pode ficar vazia")
    .min(6, "A confirmação da senha deve ter no mínimo 6 caractéres"),

    termos : z.boolean(),

    autorizacao : z.boolean()
    .optional(),

}).superRefine((dado, contexto) => {
    if(dado.senha !== dado.confirmarSenha){
        contexto.addIssue({
            code: "custom",
            message: "As senhas não são iguais",
            path: ["confirmarSenha"],
        })
    }

    if(!dado.termos){
        contexto.addIssue({
            code: "custom",
            message: "Os termos são obrigatórios.",
            path: ["termos"],
        })
    }
    });




export default function CadastroEmpresa() {

    const { register, handleSubmit, formState: { errors } } = useForm<criarEmpresaDados>({
        resolver : zodResolver(criarEmpresaEsquema),
    });
    const navigate = useNavigate();
    function criarEmpresa(dados : any){
        console.log(dados);
        if(dados != null){
            alert("conta criada com sucesso");
            navigate("/empresa")
        }
    }
    return (
        <>
            <div className="containerCadastroEmpresa">
                <HeaderEmpressa login={false}/>
                <div className="formularioCadastroEmpresa">
                    <form onSubmit={handleSubmit(criarEmpresa)}>
                        <div className="cadastroEmpresa">
                        <div className="labelContent">
                        {errors.nomeEmpresa && <span>{errors.nomeEmpresa.message}</span>}
                        <input type="text" placeholder="Nome da Empresa" {...register("nomeEmpresa")}></input>
                        </div>
                        <div className="labelContent">
                        {errors.cnpj && <span>{errors.cnpj.message}</span>}
                        <input type="text" placeholder="CNPJ da Empresa" {...register("cnpj")}></input>
                        </div>
                        <div className="labelContent">
                        {errors.telefoneFixo && <span>{errors.telefoneFixo.message}</span>}
                        <input type="text" placeholder="Telefone Fixo" {...register("telefoneFixo")}></input>
                        </div>
                        <div className="labelContent">
                        {errors.email && <span>{errors.email.message}</span>}
                        <input type="email" placeholder="E-mail Corporativo" {...register("email")}></input>
                        </div>
                        <div className="labelContent">
                        {errors.senha && <span>{errors.senha.message}</span>}
                        <input type="password" placeholder="Senha" {...register("senha")}></input>
                        </div>
                        <div className="labelContent">
                        <span>{errors.confirmarSenha && <span>{errors.confirmarSenha.message}</span>}</span>
                        <input type="password" placeholder="Confirmar Senha" {...register("confirmarSenha")}></input>
                        </div>
                        </div>
                        <div className="redesEmpresa">
                            <p className="complementoEmpresa"> ou</p>
                            <div className="itensEmpresa">
                                <button type="button">
                                    <FcGoogle size="20px" />
                                    <p>Google</p>
                                </button>
                                <button type="button">
                                    <IoLogoLinkedin color="rgba(0, 119, 181, 1)" size="25px" />
                                    <p>Linkedin</p>
                                </button>
                            </div>
                        </div>
                        <div className="juncaoLabelCheckboxEmpresa">
                        {errors.termos && <span>{errors.termos.message}</span>}
                        <label >
                            <input type="checkbox" {...register("termos")}/>Li e aceito as <a href="#">Condições Legais</a> e a <a href="#">Política de Privacidade</a>
                        </label>
                        <label>
                            <input type="checkbox" {...register("autorizacao")}/>Autorizo o ÆQUITAS a enviar comunicações comerciais sobre produtos, serviços e eventos dos seus parceiros e colaboradores
                        </label>
                        </div>
                        <div className="finalFormEmpresa">
                            <button type="submit" id="cadastrarEmpresa">Cadastrar-se</button>
                            <label>Você é candidato? <Link to="/cadastroPessoa">Cadastre-se aqui.</Link></label>
                        </div>
                    </form>
                </div>
                <img src={wave} alt="" id="waveCadastroEmpresa" />
                <img src={persona} alt="Mulher cadeirante feliz se inscrevendo no site" id="personaCadastroEmpresa" />
                <p className="direitos">&copy;ÆQUITAS  Todos os direitos reservados.</p>
            </div>
        </>
    )
}
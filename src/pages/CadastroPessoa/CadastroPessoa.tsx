import HeaderPessoa from "../../componentes/HeaderPessoa/HeaderPessoa"
import "./cadastroPessoa.css"
import { FcGoogle } from "react-icons/fc";
import persona from "../../images/Diversidade.png"
import wave from "../../images/waveCadastro.png"
import { IoLogoLinkedin } from "react-icons/io";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
type criarPessoaDados = z.infer<typeof criarPessoaEsquema>

const criarPessoaEsquema = z.object({
    nomePessoa: z.string()
        .nonempty("o nome da empresa não pode estar vazio"),

    cpf: z.string()
        .nonempty("o CPF não pode estar vazio"),

    telefone: z.string()
        .nonempty("O telefone não pode ficar vazio"),

    email: z.string()
        .nonempty("O email não pode estar vazio")
        .email("Formato do email invalido"),

    senha: z.string()
        .nonempty("A senha não pode ficar vazia")
        .min(6, "A senha deve ter no mínimo 6 caractéres"),

    nascimento: z.string()
        .date("data invalida")
        .nonempty("Campo não pode ficar vazio")
        .refine(dateString => {
            const birthDate = new Date(dateString);
            const today = new Date();
            const age = today.getFullYear() - birthDate.getFullYear();
            const monthDifference = today.getMonth() - birthDate.getMonth();

            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
                return age - 1 >= 14;
            }
            return age >= 14;
        }, {
            message: "Você deve ter 14 anos ou mais.",
        }),

    confirmarSenha: z.string()
        .nonempty("A confirmação da senha não pode ficar vazia")
        .min(6, "A confirmação da senha deve ter no mínimo 6 caractéres"),

    termos: z.boolean(),

    autorizacao: z.boolean()
        .optional(),

}).superRefine((dado, contexto) => {
    if (dado.senha !== dado.confirmarSenha) {
        contexto.addIssue({
            code: "custom",
            message: "As senhas não são iguais",
            path: ["confirmarSenha"],
        })
    }
    if (!dado.termos) {
        contexto.addIssue({
            code: "custom",
            message: "Os termos são obrigatórios.",
            path: ["termos"],
        })
    }
});

export default function CadastroPessoa() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<criarPessoaDados>({

        resolver: zodResolver(criarPessoaEsquema),
    });

    function criarCadastro(dados: any) {
        console.log(dados);
        if(dados != null){
            alert("usuario cadastrado com sucesso")
            navigate("/vagas");
        }
    }

    const [visibilidadeSenha, setvisibilidadeSenha] = useState(true);
    const [senha, setSenha] = useState(true);
    return (
        <>
        
                <HeaderPessoa login={false}/>
                <div className="formularioCadastroPessoa">
                    <form onSubmit={handleSubmit(criarCadastro)}>

                        <div className="cadastroPessoa">
                            <div className="labelContentPessoa">
                                {errors.nomePessoa && <span>{errors.nomePessoa.message}</span>}
                                <input type="text" placeholder="Nome" {...register("nomePessoa")}></input>
                            </div>
                            <div className="labelContentPessoa">
                                {errors.cpf && <span>{errors.cpf.message}</span>}
                                <input type="text" placeholder="CPF" {...register("cpf")}></input>
                            </div>
                            <div className="labelContentPessoa">
                                {errors.email && <span>{errors.email.message}</span>}
                                <input type="email" placeholder="E-mail" {...register("email")}></input>
                            </div>
                            <div className="labelContentPessoa">
                                {errors.telefone && <span>{errors.telefone.message}</span>}
                                <input type="text" placeholder="Telefone celular" {...register("telefone")}></input>
                            </div>
                            <div className="labelContentPessoa">
                                {errors.nascimento && <span>{errors.nascimento.message}</span>}
                                <input type="date" placeholder="data de nascimento" {...register("nascimento")}></input>
                            </div>

                            <div className="labelContentPessoa">
                                {errors.senha && <span>{errors.senha.message}</span>}
                                {senha ? <input type="password" placeholder="Senha" {...register("senha")} /> :
                                    <input type="text" placeholder="Senha" {...register("senha")}></input>}
                                <button type="button" onClick={() => { setSenha(!senha) }}>{senha ? <MdOutlineVisibility /> : < MdOutlineVisibilityOff />}</button>
                            </div>
                            <div className="labelContentPessoa">
                                <span>{errors.confirmarSenha && <span>{errors.confirmarSenha.message}</span>}</span>
                                {visibilidadeSenha ? <input type="password" placeholder="Confirmar Senha" {...register("confirmarSenha")}></input> :
                                    <input type="text" placeholder="Confirmar Senha" {...register("confirmarSenha")}></input>}
                                <button type="button" onClick={() => { setvisibilidadeSenha(!visibilidadeSenha) }}>{visibilidadeSenha ? <MdOutlineVisibility /> : < MdOutlineVisibilityOff />}</button>
                            </div>
                        </div>
                        <div className="juncaoLabelCheckboxPessoa">
                            {errors.termos && <span>{errors.termos.message}</span>}
                            <label >
                                <input type="checkbox" {...register("termos")} />Li e aceito as <a href="#">Condições Legais</a> e a <a href="#">Política de Privacidade</a>
                            </label>
                            <label>
                                <input type="checkbox" {...register("autorizacao")} />Autorizo o ÆQUITAS a enviar comunicações comerciais sobre produtos, serviços e eventos dos seus parceiros e colaboradores
                            </label>
                            <button type="submit" id="cadastrarPessoa">Cadastrar-se</button>
                            <label>Você é um Empresa? <Link to="/cadastroEmpresa">Cadastre-se aqui.</Link></label>
                        </div>
                    </form>
                    <div className="redesPessoa">
                        <h2>Dê o próximo salto na sua carreira aqui!</h2>
                        <p>Entre e comece a se candidatar:</p>
                        <div className="itensPessoa">
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
                </div>
                <img src={wave} alt="" id="waveCadastroPessoa" />
                <img src={persona} alt="" id="personaCadastroPessoa" />
                <p className="direitos">&copy;ÆQUITAS  Todos os direitos reservados.</p>
        </>
    )
}
import './home.sass'
import api from "../../Services/api"
import { useFormStatus } from "react-dom"
import { IoIosCafe } from "react-icons/io"
import { useState } from "react"
import { MdEdit } from "react-icons/md";

export default function Home() {
    const { pending } = useFormStatus()
    const [lista, setLista] = useState([])
    const [id, setId] = useState(1)


    // Função ao clicar vai chamar na Api, adicionando a lista e somando +1 no id
    async function handleGetRequest() {
        const response = await api.get(`/character/${id}`)
        setLista(prevLista => [...prevLista, response.data])
        setId(id + 1)
    }

    return (
        <>
            <div className="conteudo-botao">
                <button className="btn botao-novo" type="submit" onClick={handleGetRequest}>
                    <div className="icone">
                        <IoIosCafe color="#368467" fontSize={20} />
                    </div>
                    {/* verificação caso a api demore para responder */}
                    {pending ? 'Carregando...' : ' Nova sessão de prova'}
                </button>
            </div>

            <div className="lista-sessao">
                {/* verificação se possui alguma sessão */}
                {lista.length === 0 ? (
                    <h2 className="mensagem">Não Possui nenhuma sessão !</h2>
                ) : (
                    lista.map((item, index) => (
                        <div key={index} className="conteudo-api">
                            <div className="card-api">
                                <h3>SESSÃO #{item.id}</h3>
                                <h4>{item.name}</h4>
                                <p>{item.status}</p>
                            </div>
                            <div className="botoes">
                                <button className="botao-card laranja">
                                    3
                                </button>
                                <button className="botao-card edit">
                                    <MdEdit size={20} color="white" />
                                </button>
                                <button className="btn botao-card-max">
                                    <IoIosCafe size={20} />
                                    <div className="conteudo-max">
                                        <h5>PROVAR AGORA</h5>
                                    </div>
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}
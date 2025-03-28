import './home.sass'
import api from "../../Services/api"
import { useState } from "react"
import { IoIosCafe } from "react-icons/io"
import { MdEdit } from "react-icons/md"
import React from 'react'

export default function Home() {
    const [lista, setLista] = useState([]) 
    const [id, setId] = useState(1) 
    const [loading, setLoading] = useState(false) 

    // Função ao clicar vai chamar na API, adicionando a lista e somando +1 no id
    async function handleGetRequest() {
        setLoading(true); 
        try {
            const response = await api.get(`/receitas/${id}`)
            setLista(prevLista => [...prevLista, response.data])
            setId(id + 1)
        } catch (error) {
            console.error("Erro ao buscar os dados", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="conteudo-botao">
                <button className="btn botao-novo" type="submit" onClick={handleGetRequest}>
                    <div className="icone">
                        <IoIosCafe color="#368467" fontSize={20} />
                    </div>
                    {/* Verificação de carregamento */}
                    {loading ? 'Carregando...' : ' Nova sessão de prova'}
                </button>
            </div>

            <div className="lista-sessao">
                {/* Verificação se possui alguma sessão */}
                {lista.length === 0 ? (
                    <h2 className="mensagem">Não Possui nenhuma sessão !</h2>
                ) : (
                    lista.map((item, index) => (
                        <div key={index} className="conteudo-api">
                            <div className="card-api">
                                <h4>SESSÃO #{item.id}</h4>
                                <strong>{item.receita}</strong>
                                <p>{item.tipo}</p>
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

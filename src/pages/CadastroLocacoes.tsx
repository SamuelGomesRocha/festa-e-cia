import React, { useEffect, useState } from 'react'
import {

} from 'react-native'

import api from '../services/api'

interface Cliente { nome: string, idCliente: number }
interface Produto { nome: string, idProduto: number }

export function CadastroLocacoes() {

    const [dadosLocacao, setDadosLocacao] = useState({
        cliente: '',
        endereco: '',
        dataInicial: '',
        dataFinal: '',
        adicinarProdutos: '',
        taxaAdicional: '',
        custoOperacional: '',
        valorTotal: ''
    })

    const [dadosCliente, setDadosCliente] = useState<Cliente[]>([])
    const [dadosProduto, setDadosProduto] = useState<Produto[]>([])

    const handleDataCliente = async () => {
        //then: busca assíncrona para a recepção de dados

        /*
        api.get("/cliente").then(data => {
            data.data.map((cliente: Cliente) => {
                console.log(cliente)
                let { nome, idCliente } = cliente
                setDadosCliente([...dadosCliente, { nome, idCliente }])
            })
        })
        */
        let { data } = await api.get<Cliente[]>("/cliente")
        let findDataClient = data.map((cliente: Cliente) => {
            let { nome, idCliente } = cliente
            //[...dadosCliente, { nome, idCliente }]
            return { nome, idCliente }
        })
        setDadosCliente(findDataClient)
    }

    const handleDataProduto = async () => {
        let { data } = await api.get<Produto[]>("/produto")
        let findDataProduto = data.map((produto: Produto) => {
            let { nome, idProduto } = produto
            //[...dadosProduto, { nome, idProduto }]
            return { nome, idProduto }
        })
        setDadosProduto(findDataProduto)

    }


    const handleDataEndereco = (data: string) => {
        setDadosLocacao({
            ...dadosLocacao,
            endereco: data
        })
    }

    const handleDataDataInicial = (data: string) => {
        setDadosLocacao({
            ...dadosLocacao,
            dataInicial: data
        })
    }

    const handleDataFinal = (data: string) => {
        setDadosLocacao({
            ...dadosLocacao,
            dataFinal: data
        })
    }


    // const handleCustoOperacional = (data)


    //Array: observação de variáveis
    useEffect(() => { handleDataCliente(), handleDataProduto() }, [])


    return (

        <>
            {
                //   console.log(dadosCliente)
                console.log(dadosProduto)
            }
        </>
    );


}
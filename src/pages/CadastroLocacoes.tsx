import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    SafeAreaView,
    View
}
    from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { DefaultTheme, TextInput } from 'react-native-paper'
import TextInputMask from 'react-native-text-input-mask'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Button } from '../components/Button'

import api from '../services/api'
import colors from '../styles/colors'

interface Cliente { nome: string, idCliente: number }
interface Produto { nome: string, idProduto: number }

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        text: colors.rosao,
        primary: colors.rosao,
        accent: colors.rosao

    }
};



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


    const handleDataTaxaAdicional = (data: string) => {
        setDadosLocacao({
            ...dadosLocacao,
            taxaAdicional: data
        })
    }


    const handleDataCustoOperacional = (data: string) => {
        setDadosLocacao({
            ...dadosLocacao,
            custoOperacional: data
        })
    }

    const handleDataValorTotal = (data: string) => {
        setDadosLocacao({
            ...dadosLocacao,
            valorTotal: data
        })
    }

    // const handleCustoOperacional = (data)


    //Array: observação de variáveis
    useEffect(() => { handleDataCliente(), handleDataProduto() }, [])


    const createLocacao = () => {
        api.post('/locacao', {
            locacao: dadosLocacao
        }).then((data) => {
            console.log(data);
            cancelar();
        }).catch(error => {
            console.log(error)
        })
    }


    const cancelar = () => {
        setDadosLocacao({
            cliente: '',
            endereco: '',
            dataInicial: '',
            dataFinal: '',
            adicinarProdutos: '',
            taxaAdicional: '',
            custoOperacional: '',
            valorTotal: ''
        })

    }

    return (

        <ScrollView style={styles.container}>

            <View style={styles.containerInput}>
                <View style={styles.input}>
                    <TextInput
                        label="Cliente"
                        style={styles.inputDesign}
                        value={dadosLocacao.cliente}
                        onChangeText={handleDataCliente}
                        theme={theme}
                    />
                </View>



                <View style={styles.input}>
                    <TextInput label="Endereço"
                        style={styles.inputDesign}
                        value={dadosLocacao.endereco}
                        onChangeText={handleDataEndereco}
                        theme={theme}
                    />
                </View>

                <View style={styles.input}>
                    <TextInput
                        label="Data Inicial"
                        style={styles.inputDesign}
                        value={dadosLocacao.dataInicial}
                        onChangeText={handleDataDataInicial}
                        theme={theme}

                    />
                </View>

                <View style={styles.input}>
                    <TextInput
                        label="Data Final"
                        style={styles.inputDesign}
                        value={dadosLocacao.dataFinal}
                        onChangeText={handleDataFinal}
                        theme={theme}

                    />
                </View>

                <View style={styles.input}>
                    <TextInput
                        label="Adicionar Produtos"
                        style={styles.inputDesign}
                        value={dadosLocacao.adicinarProdutos}
                        onChangeText={handleDataProduto}
                        theme={theme}
                    />
                </View>

                <View style={styles.input}>
                    <TextInput
                        label="Taxa Adicional"
                        style={styles.inputDesign}
                        value={dadosLocacao.taxaAdicional}
                        onChangeText={handleDataTaxaAdicional}
                        theme={theme}
                    />
                </View>

                <View style={styles.input}>
                    <TextInput
                        label="Custo Operacional"
                        style={styles.inputDesign}
                        value={dadosLocacao.custoOperacional}
                        onChangeText={handleDataCustoOperacional}
                        theme={theme}
                    />
                </View>

                <View style={styles.input}>
                    <TextInput
                        label="Valor Total"
                        style={styles.inputDesign}
                        value={dadosLocacao.valorTotal}
                        onChangeText={handleDataValorTotal}
                        theme={theme}
                    />
                </View>



            </View>
            <View style={styles.containerButton}>
                <Button title="Cadastrar" onPress={createLocacao} />
                <Button title="Cancelar" onPress={cancelar} />
            </View>


        </ScrollView>
    );


}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.background
    },

    containerInput: {
        flex: 1,
        padding: 14,
        marginTop: 14

    },

    input: {
        marginBottom: 24,
    },

    inputDesign: {
        color: colors.rosao,
        backgroundColor: colors.background,
    },

    containerButton: {
        flex: 1,
        flexDirection: 'row',
        padding: 14,
        justifyContent: 'space-between',
        margin: 14
    }
})
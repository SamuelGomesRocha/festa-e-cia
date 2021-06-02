import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-paper';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import api from '../services/api';

export function CadastroProdutos() {

  const [dadosProduto, setDadosProduto]=useState({
    nome:'',
    precoCusto:'',
    precoLocacao:'',
    categoria:'',
  })


  const [dadosEstoque, setDadosEstoque]=useState({
    quantidadeTotal:'',
    quantidadeDisponivel:''
  })

  const handleDataNome=(data:string)=>{
    setDadosProduto({
      ...dadosProduto,
      nome:data
    })
  }
  
  const handleDataPrecoCusto=(data:string)=>{
    setDadosProduto({
      ...dadosProduto,
      precoCusto:data
    })
  }
  const handleDataPrecoLocacao=(data:string)=>{
    setDadosProduto({
      ...dadosProduto,
      precoLocacao:data
    })
  }
  const handleDataCategoria=(data:string)=>{
    setDadosProduto({
      ...dadosProduto,
      categoria:data
    })
  }

  const handleDataQantidade=(data:string)=>{
    setDadosEstoque({
      quantidadeDisponivel:data,
      quantidadeTotal:data
    })
  }


  const createProduto=()=>{
    console.log(dadosProduto,dadosEstoque)
    api.post('/produto',{
      produto:{
        ...dadosProduto,
        precoCusto:Number(dadosProduto.precoCusto),
        precoLocacao:Number(dadosProduto.precoLocacao)
      },
      estoque:{
        quantidadeTotal:Number(dadosEstoque.quantidadeTotal),
        quantidadeDisponivel:Number(dadosEstoque.quantidadeDisponivel)
      }
    }).then((data)=>{
      console.log(data);
      cancelar();
    }).catch(error=>{
      console.log(error)
    })
  }

  const cancelar=()=>{
    setDadosProduto({
      nome:'',
      precoCusto:'',
      precoLocacao:'',
      categoria:''
    })
    
    setDadosEstoque({
      quantidadeTotal:'',
      quantidadeDisponivel:''  
    })
  }

  return (
    <ScrollView style={styles.container} keyboardDismissMode="interactive">
      <View style={styles.containerInput}>
        <View style={styles.input}>
          <TextInput label="Nome do produto"
            style={styles.inputDesign}
            value={dadosProduto.nome}
            keyboardType="default"
            onChangeText={handleDataNome}
          />
        </View>
        <View style={styles.input}>
          <TextInput label="Categoria"
            style={styles.inputDesign}
            value={dadosProduto.categoria}
            keyboardType="default"
            onChangeText={handleDataCategoria}/>
        </View>
        <View style={styles.input}>
          <TextInput label="Preço de custo"
            style={styles.inputDesign}
            value={dadosProduto.precoCusto}
            keyboardType="number-pad"
            onChangeText={handleDataPrecoCusto}/>
        </View>
        <View style={styles.input}>
          <TextInput label="Preço de locação"
            style={styles.inputDesign}
            value={dadosProduto.precoLocacao}
            keyboardType="number-pad"
            onChangeText={handleDataPrecoLocacao}/>
        </View>
        <View style={styles.input}>
          <TextInput label="Quantidade"
            style={styles.inputDesign}
            value={dadosEstoque.quantidadeTotal}
            keyboardType="numeric"
            onChangeText={handleDataQantidade}/>
        </View>
      </View>
      <View style={styles.containerButton}>
        <Button title="Cadastrar" onPress={createProduto}/>
        <Button title="Cancelar" onPress={cancelar}/>
      </View>        
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EFE3DC'
  },

  containerInput:{
    flex: 1,
    padding: 14,
    marginTop: 14
  },

  input:{
    marginBottom: 24,
  },

  inputDesign:{
    color: colors.rosao,
    backgroundColor:colors.background,
  },

  containerButton:{
    flex: 1,
    flexDirection: 'row',
    padding: 14,
    justifyContent: 'space-between',
    margin: 14
  }
})

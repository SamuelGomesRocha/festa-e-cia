import React from 'react'
import { useState } from 'react'
import {
    View,
    StyleSheet,
    SafeAreaView
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';


import { TextInput } from 'react-native-paper';
import { Button } from '../components/Button';
import api from '../services/api';
import colors from '../styles/colors';



export function CadastroCliente() {
  const [dadosCliente, setDadosCliente]=useState({
    nome:'',
    cpf:'',
    telefone:'',
    endereco:''
  })


  const handleDataNome=(data:string)=>{
    setDadosCliente({
      ...dadosCliente,
      nome:data
    })
  }
  
  const handleDataCPF=(data:string)=>{
    setDadosCliente({
      ...dadosCliente,
      cpf:data
    })
  }
  const handleDataTelefone=(data:string)=>{
    setDadosCliente({
      ...dadosCliente,
      telefone:data
    })
  }
  const handleDataEndereco=(data:string)=>{
    setDadosCliente({
      ...dadosCliente,
      endereco:data
    })
  }


  const createCliente=()=>{
    api.post('/cliente',{
      cliente:dadosCliente
    }).then((data)=>{
      console.log(data);
      cancelar();
    }).catch(error=>{
      console.log(error)
    })
  }

  const cancelar=()=>{
    setDadosCliente({
      nome:'',
      cpf:'',
      telefone:'',
      endereco:''
    })

  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerInput}>
        <View style={styles.input}>
          <TextInput label="Nome"
            style={styles.inputDesign}
            value={dadosCliente.nome}
            onChangeText={handleDataNome}
          />
        </View>
        <View style={styles.input}>
          <TextInput label="CPF"
            style={styles.inputDesign}
            keyboardType="phone-pad"
            value={dadosCliente.cpf}
            onChangeText={handleDataCPF}
          />
        </View>
        <View style={styles.input}>
          <TextInput label="Telefone"
            style={styles.inputDesign}
            keyboardType="phone-pad"
            value={dadosCliente.telefone}
            onChangeText={handleDataTelefone}
          />
        </View>
        <View style={styles.input}>
          <TextInput label="Endereço"
            value={dadosCliente.endereco}
            onChangeText={handleDataEndereco}
            style={styles.inputDesign}
          />
        </View>
      </View>
      <View style={styles.containerButton}>
        <Button title="Cadastrar" onPress={createCliente}/>
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

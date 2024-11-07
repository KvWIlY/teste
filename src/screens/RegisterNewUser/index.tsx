import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { styles } from './style';


export default function RegisterNewUser() {  // Usando as props para acessar navigation
  const [username, setUsername] = useState('');
  const [nomeTecnico, setNomeTecnico] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cargo, setCargo] = useState('');
  const [agencia, setAgencia] = useState('');

  const handleRegister = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        
        return firestore().collection('funcionarios').add({
          userId: user.uid,
          username,
          nomeTecnico,
          email,
          cargo,
          agencia
        });
      })
      .then(() => {
        Alert.alert('Sucesso', 'Cadastro concluído!', [
          {
            text: 'OK',
            onPress: () => {
              // Limpar os campos após o cadastro
              setUsername('');
              setNomeTecnico('');
              setEmail('');
              setPassword('');
              setCargo('');
              setAgencia('');
  
            }
          }
        ]);
      })
      .catch(error => {
        console.error("Erro ao cadastrar usuário:", error);
        Alert.alert('Erro', 'Não foi possível realizar o cadastro.');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Técnico</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Nome do Técnico(a)"
        value={nomeTecnico}
        onChangeText={setNomeTecnico}
      />
      
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
          
      <Picker
        selectedValue={cargo}
        style={styles.picker}
        onValueChange={(itemValue) => setCargo(itemValue)}
      >
        <Picker.Item label="Selecione o seu cargo" value="" />
        <Picker.Item label="Lorem" value="Lorem" />
        <Picker.Item label="Ipsu" value="Ipsu" />
        <Picker.Item label="Outro" value="outro" />
      </Picker>

      <Picker
        selectedValue={agencia}
        style={styles.picker}
        onValueChange={(itemValue) => setAgencia(itemValue)}
      >
        <Picker.Item label="Selecione a sua agencia" value="" />
        <Picker.Item label="Lorem" value="Lorem" />
        <Picker.Item label="Ipsu" value="Ipsu" />
        <Picker.Item label="Outro" value="outro" />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={handleRegister}  >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

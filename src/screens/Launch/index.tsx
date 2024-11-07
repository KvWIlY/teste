import React from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import { styles } from './styleLaunch';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/StackNavigator';  // Importe o tipo de navegação
  
// Tipando a navegação
type LaunchScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Launch'>;

type Props = {
  navigation: LaunchScreenNavigationProp;
};

export default function Launch({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#dbead5" barStyle="light-content" />
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/LogoGalo.png')} style={styles.logo} />
      </View>

      {/* Botões */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')} // Navegar para a tela 'Home'
      >
        <Text style={styles.buttonText}>Produtor</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')} // Navegar para a tela 'Login'
      >
        <Text style={styles.buttonText}>Técnico</Text>
      </TouchableOpacity>

      {/* Texto de rodapé */}
      <Text style={styles.footerText}>Desenvolvido por HackRoça</Text>
    </View>
  );
}

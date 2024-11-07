import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/StackNavigator'; 
import { styles } from './style';

// Tipagem do navigation
type HomeAdminNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: HomeAdminNavigationProp;
};

export function HomeAdmin({ navigation }: Props) {
  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RegisterNewUser')}
      >
        <Text style={styles.buttonText}>Cadastrar Tecnicos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Assistance')}
      >
        <Text style={styles.buttonText}>Notificações</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Informations')}
      >
        <Text style={styles.buttonText}>Relátorios</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Desenvolvido por HackRoça</Text>
    </View>
  );
}

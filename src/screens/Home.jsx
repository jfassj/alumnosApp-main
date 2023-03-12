import React, { useContext } from 'react';
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../context/AlumnoContext';
import { colores, styles } from '../theme/theme';

const Home = (props) => {
  const context = useContext(AuthContext);
  return (
	<View style={styles.login_container}>
    <Text>Home</Text>
    <Image
        style={styles.home_foto}
        source={{
          uri: `http://10.0.2.2:5000/img/${context.authState.foto}`,
        }}
      />
    <Text>Matricula: { context.authState.matricula }</Text>
    <Text>nombre: { context.authState.nombre }</Text>
    <TouchableOpacity
    style={styles.home_boton}
    onPress={() => {
      context.signOut();
      props.navigation.navigate('Login');
    }}>
      <Text style={styles.home_boton_texto}>Salir</Text>  
    </TouchableOpacity>
  </View>
  )
}

export default Home
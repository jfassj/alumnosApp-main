import React, { useState, useContext } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import logInImage from '../images/login.jpg';
import { colores, styles } from '../theme/theme';
import axios from 'axios';
import { AuthContext } from "../context/AlumnoContext";

const initialState = {
	matricula:'',
	password:'',
}

const Login = (props) => {

	const [datos, setDatos] = useState(initialState);
	const { matricula, password} = datos;
	const LOGIN_IMAGE = Image.resolveAssetSource(logInImage).uri;

	const context = useContext(AuthContext);

	const handleChange = (nom, valor) => {
		setDatos({...datos, [nom]:valor});
	}
	const handleSubmit = () => {

	const { matricula, password } = datos;
    axios
      .post('http://10.0.2.2:5000/alumno/acceder',
	 {
		matricula,
		'contrasenha':password,
	 })
      .then(function (response) {
        // handle success
        // console.log(JSON.stringify(response.data.resultado));
		if(response.data.resultado.auth) {
			setDatos(initialState);
			context.signIn(response.data.resultado);
			props.navigation.navigate('TopTabNavigation');
		}
      })
      .catch(function (error) {
        // handle error
        console.log(JSON.stringify(error));
      })
      .finally(function () {
        // ToastAndroid.show('operación terminada', ToastAndroid.SHORT);
      });
    
  };

  return (
    <View style={ styles.login_container }>
      <Image source={{uri: LOGIN_IMAGE}} style={styles.login_image} />
      <Text style={ styles.login_texto }>Introduce tu matricula y contraseña</Text>
	  <TextInput
	 	placeholder='Matricula'
		placeholderTextColor={ colores.uno }
		textAlign='center'
		style={ styles.login_input }
		value= { matricula }
		onChangeText = { valor => handleChange('matricula', valor) }
	  />
	  <TextInput
	 	placeholder='Contraseña'
		placeholderTextColor={ colores.uno }
		textAlign='center'
		style={ styles.login_input }
		secureTextEntry={ true }
		value={ password }
		onChangeText = { valor => handleChange('password', valor) }
	  />
	  <TouchableOpacity
	  	style = {{ flex:1 }}
		onPress={ handleSubmit }
	  >
		<View style={ styles.login_boton }>
			<Text style = { styles.login_boton_texto }>Ingresar</Text>
		</View>

	  </TouchableOpacity>
	  <Text>
		{ context.authState.nombre }
	  </Text>
    </View>
  );
}

export default Login;

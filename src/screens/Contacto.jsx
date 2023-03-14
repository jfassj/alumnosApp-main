import React, {useContext, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ToastAndroid} from 'react-native';
import {AuthContext} from '../context/AlumnoContext';
import {colores, styles} from '../theme/theme';
import axios from 'axios';

const initialState = {
  asunto: '',
  cuerpo: '',
};

const Contacto = () => {
  const context = useContext(AuthContext);
  const [contacto, setContacto] = useState(initialState);
  const {asunto, cuerpo} = contacto;

  const handleChange = (name, valor) => {
    setContacto({
      ...contacto, [name]: valor
    });
  };

  const handleSubmit = () => {
    axios.post('http://10.0.2.2:5000/alumno/mensaje/crear', contacto,{
        headers: {
          'x-access-token': context.authState.token,
        },
      })
      .then(function (response) {
        // handle success
        console.log(JSON.stringify(response.data.resultado));
        setContacto(initialState);
        ToastAndroid.show(response.data.mensaje, ToastAndroid.SHORT);
      })
      .catch(function (error) {
        // handle error
        console.warn(JSON.stringify(error));
      })
      .finally(function () {
        // ToastAndroid.show('operación terminada', ToastAndroid.SHORT);
      });
  };
  return (
    <View style={styles.contacto_container}>
      <Text>Contactanos</Text>
      <TextInput
        placeholder="Ingresa el asunto"
        placeholderTextColor={colores.uno}
        textAlign="center"
        style={styles.contacto_asunto_input}
        value={asunto}
        onChangeText={value => handleChange('asunto', value)}
      />
      <Text>Mensaje</Text>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={400}
        placeholder="Mensaje"
        placeholderTextColor={colores.uno}
        textAlign="center"
        style={styles.contacto_cuerpo_input}
        value={cuerpo}
        onChangeText={value => handleChange('cuerpo', value)}
      />
      <TouchableOpacity style={styles.contacto_boton} onPress={handleSubmit}>
          <Text style={styles.contacto_boton_texto}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Contacto;

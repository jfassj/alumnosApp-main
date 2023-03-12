import React, {useEffect, useState, useContext} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {AuthContext} from '../context/AlumnoContext';
import axios from 'axios';
import {styles} from '../theme/theme';

const initialState = {
  matricula: '',
  aPaterno: '',
  aMaterno: '',
  nombre: '',
  sexo: '',
  dCalle: '',
  dNumero: '',
  dColonia: '',
  dCodigoPostal: '',
  aTelefono: '',
  aCorre: '',
  aFacebook: '',
  aInstagram: '',
  tipoSangre: '',
  nombreContacto: '',
  telefonoContacto: '',
  contrasenha: '',
};
const Perfil = () => {
  const [alumno, setAlumno] = useState(initialState);

  const {matricula,aPaterno,aMaterno,nombre,sexo,dCalle,dNumero,dColonia,dCodigoPostal,aTelefono,aCorreo,aFacebook,aInstagram,tipoSangre,nombreContacto,telefonoContacto,contrasenha,} = alumno;

  const context = useContext(AuthContext);

  useEffect(() => {
    traerAlumno();
  }, []);

  const traerAlumno = async () => {
    await axios
      .get('http://10.0.2.2:5000/alumno/traer', {
        headers:{
          'x-access-token': context.authState.token,
        },
      })
      .then(function (response) {
        console.log(response.data.resultado);
        setAlumno(response.data.resultado);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.home_container}>
      <Image
      style={styles.home_foto}
      source={{
        uri:`http://10.0.2.2:5000/img/${alumno.foto}`,
      }}
      />
      {/* <ImageBackground
      style={styles.perfil_image_background}
      source={{
        uri:`http://10.0.2.2:5000/img/${alumno.foto}`,
      }}
      resizeMode="cover"
      > */}
      <Text style={styles.perfil_texto}>Matricula: {alumno.matricula}👿</Text>
      <Text style={styles.perfil_texto}>Nombre: {alumno.nombre} {alumno.aPaterno} {alumno.aMaterno}🥵</Text>
      <Text style={styles.perfil_texto}>Sexo: {alumno.sexo === 1 ? 'Femenino' : 'Masculino'}😘</Text>
      <Text style={styles.perfil_texto}>Calle: {alumno.dCalle} Numero: {alumno.dNumero}👍</Text>
      <Text style={styles.perfil_texto}>Colonia: {alumno.dColonia}👺</Text>
      <Text style={styles.perfil_texto}>Codigo Postal: {alumno.dCodigoPostal}😶‍🌫️</Text>
      <Text style={styles.perfil_texto}>Teléfono: {alumno.aTelefono}📞</Text>
      <Text style={styles.perfil_texto}>Correo Electrónico: {alumno.aCorreo}✉️</Text>
      <Text style={styles.perfil_texto}>Facebook: {alumno.aFacebook}📘</Text>
      <Text style={styles.perfil_texto}>Instagram: {alumno.aInstagram}📸</Text>
      <Text style={styles.perfil_texto}>Tipo de Sangre: {alumno.tipoSangre}🩸</Text>
      <Text style={styles.perfil_texto}>Nombre de Contacto: {alumno.nombreContacto}🎅</Text>
      <Text style={styles.perfil_texto}>Número de contacto: {alumno.telefonoContacto}🗣️</Text>
      {/* </ImageBackground> */}
    </View>
  );
};

export default Perfil;

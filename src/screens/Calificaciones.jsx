import React, { useContext, useEffect, useState } from 'react';
import { View, Text, VirtualizedList } from "react-native";
import { AuthContext } from '../context/AlumnoContext';
import { styles } from '../theme/theme';
import axios from 'axios';

const initialState = [];
const getItem = (data, index) => ({
	clave_materia:data[index].clave_materia,
	nombre_materia:data[index].nombre_materia,
	cuatrimestre:data[index].cuatrimestre,
	creditos:data[index].creditos,
	calificacion:data[index].calificacion,
})
const getItemCount = (data) => {
	return data.length;
}

const Item = ({dat}) => {
	return(
		<View style={styles.calificaciones_item}>
			<Text style={styles.calificaciones_title}>Clave:{dat.clave_materia}</Text>
			<Text style={styles.calificaciones_cuerpo}>Nombre:{dat.nombre_materia}</Text>
			<Text style={styles.calificaciones_cuerpo}>Cuatrimestre:{dat.cuatrimestre}</Text>
			<Text style={styles.calificaciones_cuerpo}>Creditos:{dat.creditos}</Text>
			<Text style={styles.calificaciones_cuerpo}>Calificación:{dat.calificacion}</Text>
		</View>
	)
}
const Calificaciones = () => {
	const context = useContext(AuthContext);
	const [calificaciones, setCalificaciones] = useState(initialState);
	const traerCalificaciones = async () => {
		await axios.get('http://10.0.2.2:5000/alumno/calificaciones', {
			headers:{
				'x-access-token':context.authState.token,
			}
		})
		.then(function(response){
			setCalificaciones(response.data.result);
		})
		.catch(function(error){
			console.log(error);
		})
	}
	useEffect(() => {
	  traerCalificaciones();
	}, [])
	

  return (
	<View style={styles.calificaciones_container}>
		<Text style={styles.calificaciones_title}>Calificaciones</Text>
		<VirtualizedList
		data={calificaciones}
		getItem={getItem}
		getItemCount={getItemCount}
		renderItem={({item}) => <Item dat={item}/>}
		keyExtractor={item => item.clave_materia}
		></VirtualizedList>
	</View>	
  )
}

export default Calificaciones;

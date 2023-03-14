import { StyleSheet } from "react-native";

export const colores = {
	'uno':'#957dad',
	'dos':'#d291bc',
	'tres':'#e0bbe4',
	'cuatro':'#fec8d8',
	'cinco':'#ffdfd3',
	'seis':'#FFFFFF',
	'siete':'grey',
}

export const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor:colores.seis,
	},
	login_image: {
		width:200,
		height:200,
		borderRadius:100,
		marginVertical:20,
	},
	login_container: {
		flex:1,
		backgroundColor:colores.seis,
		padding:20,
		alignItems:'center',
	},
	login_input:{
		width:'100%',
		height:40,
		margin:12,
		borderWidth:1,
		padding:10,
		borderLeftWidth:0,
		borderTopWidth:0,
		borderRightWidth:0,
		borderBottomWidth:1,
		borderColor:colores.siete,
	},
	login_texto:{
		fontSize:20,
		color: colores.uno,
		fontWeight:'bold',
	},
	login_boton_texto:{
		fontSize:15,
		color:colores.uno,
		fontWeight:'bold',
		textAlign:'center',
	},
	login_boton:{
		backgroundColor:colores.tres,
		width:100,
		height:40,
		borderRadius:10,
		justifyContent:'center',
		marginTop:10,
	},
	home_container: {
		flex: 1,
		backgroundColor: colores.seis,
		padding: 10,
		alignItems: 'center',
	},
	home_foto: {
		width: '30%',
		height: '30%',
	  },
	home_boton: {
		backgroundColor: colores.tres,
		width: 100,
		height: 40,
		borderRadius: 10,
		justifyContent: 'center',
		marginTop: 10,
	},
	home_boton_texto:{
		fontSize: 15,
		color: colores.uno,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	perfil_texto:{
		fontSize: 20,
		color: colores.uno,
		fontWeight: 'bold',
	},
	perfil_image_background: {
		flex: 1,
		justifyContent: 'center',
		alignItems:'center',
	},
	calificaciones_container:{
		flex: 1,
		backgroundColor: colores.seis,
		padding: 10,
	},
	calificaciones_item:{
		backgroundColor: colores.dos,
		height:150,
		justifyContent:'center',
		marginVertical: 8,
		marginHorizontal: 16,
		padding:10,
	},
	calificaciones_title:{
		fontSize:20,
	},
	calificaciones_cuerpo:{
		fontSize:18,
	},
	contacto_container: {
		flex: 1,
		backgroundColor: colores.seis,
		padding: 20,
		aligItems: 'center',
	},
	contacto_asunto_input: {
		width: '100%',
		margin: 12,
		borderWidth: 1,
		padding:10,
	},
	contacto_cuerpo_input:{
		width: '100%',
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	contacto_boton_texto: {
		fontSize: 15,
		color: colores.uno,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	contacto_boton:{
		backgroundColor: colores.tres,
		width: 100,
		height: 40,
		borderRadius: 10,
		justifyContent: 'center',
		marginTop: 10,
	},
});
import React, { createContext, useReducer } from 'react';
import { authReducer } from "./AlumnoReducer";
export const authInitialState = {
	matricula:'',
	nombre:'',
	foto:'',
	token:'',
}
export const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{

	const [authState, dispatch] = useReducer(authReducer, authInitialState);

	const signIn = (alumno) => {
		dispatch({type:'signIn', payload:alumno});
	}
	const signOut = () => {
		dispatch({type:'signOut'});		
	}

	return (
		<AuthContext.Provider
			value={{
				authState,
				signIn,
				signOut,
			}}
		>
			{ children }
		</AuthContext.Provider>
	)

}

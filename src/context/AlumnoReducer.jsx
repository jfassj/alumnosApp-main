import { authInitialState } from "./AlumnoContext";

export const authReducer = (state, action) => {
	switch(action.type) {
		case 'signIn':
			return {
        ...state,
        matricula: action.payload.matricula,
        nombre: `${action.payload.nombre} ${action.payload.aPaterno} ${action.payload.aMaterno}`,
        foto: action.payload.foto,
        token: action.payload.token,
      };
	  case 'signOut':
		return {
			...authInitialState
		}
	default:
		return state
	}
}
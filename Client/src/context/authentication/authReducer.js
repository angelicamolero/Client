import { SUCCESFULL_REGISTER, ERROR_REGISTER, OBTAIN_USER, SUCESSFUL_LOGIN, ERROR_LOGIN, LOG_OUT } from "../../types";

const reducer = (state, action) => {
    switch(action.type) {
        case SUCCESFULL_REGISTER :
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null
            }
            case ERROR_REGISTER :
                return {
                    ...state,
                    token: null,
                    message: action.payload
                }
        default:
            return state;
    }
}

export default reducer;
import React, { useReducer } from 'react'
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import clientAxios from '../../config/axios';

import { SUCCESFULL_REGISTER, 
    ERROR_REGISTER, 
    OBTAIN_USER, 
    SUCESSFUL_LOGIN, 
    ERROR_LOGIN, 
    LOG_OUT } from "../../types";

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null
    }

    const [state, dispatch ] = useReducer(AuthReducer, initialState);

    const registerUser = async data => {
        try {
            const response = await clientAxios.post('/api/users', data);
            console.log(response)

            dispatch({
                type: SUCCESFULL_REGISTER,
                payload: response.data
            })
        } catch (error) {
            console.log(error.response.data)
            const alert = {
                msg: error.response.data.msg,
                category: 'alert-error'
            }
            dispatch({
                type: ERROR_REGISTER,
                payload: alert
            })
        }
    }
    return(
        <AuthContext.Provider
        value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        registerUser
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;
import * as actionTypes from '../actionTypes';
import axios from 'axios';
import { toast } from 'react-toastify';

export const login = (username, password) => {
    return async (dispatch) => {
        let response;
        try {
            response = await axios.post(
                'https://localhost:5001/api/account/login',
                {
                    username,
                    password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            const { token } = response.data;
            dispatch({
                type: actionTypes.LOGIN,
                username: username,
                token: token,
            });
            localStorage.setItem('user', JSON.stringify(response.data));
        } catch (error) {
            toast.error(error.response.data, {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };
};

export const logout = () => {
    return (dispatch) => {
        dispatch({ type: actionTypes.LOGOUT });
        localStorage.removeItem('user');
    };
};

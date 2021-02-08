import React, { useState } from 'react';
import { Input } from '../LoginForm/LoginForm.styles';
import { toast } from 'react-toastify';
import {
    RegisterFormCancelButton,
    RegisterFormContainer,
    RegisterFormHR,
    RegisterFormSubmitButton,
    RegisterFormTitle,
} from './RegisterForm.styles';

import axios from 'axios';
import { connect } from 'react-redux';
import { login } from '../../store/actions/auth';

const RegisterForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const registerHandler = async (event) => {
        event.preventDefault();

        try {
            await axios.post(
                'https://localhost:5001/api/account/register',
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
            props.onLogin(username, password);
            props.cancelRegister();
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
            //console.log(error.response);
        }
    };

    return (
        <React.Fragment>
            <RegisterFormTitle>Sign up</RegisterFormTitle>
            <RegisterFormHR />
            <RegisterFormContainer onSubmit={registerHandler}>
                <Input
                    type='text'
                    placeholder='Username'
                    onChange={(event) => setUsername(event.target.value)}
                    value={username}
                />
                <Input
                    type='password'
                    placeholder='Password'
                    style={{ marginTop: '.7rem' }}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <RegisterFormSubmitButton type='submit'>
                    Register
                </RegisterFormSubmitButton>
                <RegisterFormCancelButton
                    type='button'
                    onClick={props.cancelRegister}
                >
                    Cancel
                </RegisterFormCancelButton>
            </RegisterFormContainer>
        </React.Fragment>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => dispatch(login(username, password)),
    };
};
export default connect(null, mapDispatchToProps)(RegisterForm);

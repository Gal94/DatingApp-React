import { useState } from 'react';
import { connect } from 'react-redux';

import { login } from '../../store/actions/auth';
import { LoginFormContainer, Input, LoginButton } from './LoginForm.styles';

const LoginForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onLoginHandler = (event) => {
        event.preventDefault();
        props.onLogin(username, password);
    };

    return (
        <LoginFormContainer onSubmit={onLoginHandler}>
            <Input
                placeholder='Username'
                type='text'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <Input
                placeholder='Password'
                type='password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <LoginButton type='submit'>Login</LoginButton>
        </LoginFormContainer>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => dispatch(login(username, password)),
    };
};

export default connect(null, mapDispatchToProps)(LoginForm);

import { useState } from 'react';

import { LoginFormContainer, Input, LoginButton } from './LoginForm.styles';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onLoginHandler = (event) => {
        event.preventDefault();
        // TODO : Call to a login action
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

export default LoginForm;

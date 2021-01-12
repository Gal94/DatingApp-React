import Styled from 'styled-components';

export const LoginFormContainer = Styled.form`
    display: flex;
    margin-top: 0rem;    
`;

export const Input = Styled.input`
    margin-right: .5rem;
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    color: #212529;
    background-color: #fff;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: .25rem;
    transition: box-shadow .3s ease-in-out;
    outline: none;

    &:focus-within {
        box-shadow: 1px 1px 5px #0d6efd, -1px -1px 5px #0d6efd;
    }
`;

export const LoginButton = Styled.button`

    cursor: pointer;
    color: #198754;
    display: inline-block;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    background-color: transparent;
    border: 1px solid #198754;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .25rem;
    outline: none;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out;

    &:hover,
    &:active {
        color: #fff;
        background-color: #198754;
        border-color: transparent;
    }

`;

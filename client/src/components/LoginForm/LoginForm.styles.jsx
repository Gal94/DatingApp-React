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
    border: 1px solid #d1d1d1;
    appearance: none;
    border-radius: .25rem;
    transition: box-shadow .2s linear;
    outline: none;

    &:focus-within {
        box-shadow: 1px 1px 5px #d1d1d1, -1px -1px 5px #d1d1d1;
    }
`;

export const LoginButton = Styled.button`

    cursor: pointer;
    color: white;
    display: inline-block;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    background-color: #4DDB6E;
    border: 1px solid #318C43;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .25rem;
    outline: none;
    transition: background-color .15s ease-in-out, border-color .15s ease-in-out;

    &:hover,
    &:active {
        background-color: #3CAB56;
        border-color: transparent;
    }
`;

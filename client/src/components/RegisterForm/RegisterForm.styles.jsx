import Styled, { css } from 'styled-components';

export const RegisterFormTitle = Styled.h1`
    color: #0275D8;
`;

export const RegisterFormHR = Styled.hr`
    width: 20rem;
`;

export const RegisterFormContainer = Styled.form`
    width: 20rem;
    margin: 0 auto;
`;

const buttonsStyle = css`
    font-size: 14px;
    padding: 8px 12px;
    margin-top: 0.7rem;
    margin-bottom: 0;
    margin-right: 0.5rem;
    color: white;
    background-color: #198754;

    display: inline-block;
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 0.3rem;
    outline: none;

    &: hover {
        background-color: #115c39;
    }
`;

export const RegisterFormSubmitButton = Styled.button`
    ${buttonsStyle}
`;

export const RegisterFormCancelButton = Styled.button`
    ${buttonsStyle}
    background-color: #c5c9c8;

    &: hover {
        background-color: #acadad;
    }
`;

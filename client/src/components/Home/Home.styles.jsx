import Styled, { css } from 'styled-components';

const btn = css`
    font-size: 16px;
    padding: 10px 16px;
    margin-bottom: 0;
    margin-right: 0.5rem;
    color: white;

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
`;

export const HomePageContainer = Styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

export const ContentContainer = Styled.div`
    text-align: center;
`;

export const DescTitle = Styled.h1`
    margin: 0;
`;

export const DescText = Styled.p`

`;

export const ButtonsContainer = Styled.div`
    text-align: center;
`;

export const RegisterBtn = Styled.button`
    ${btn}
    background-color: #0275d8;

    &: hover {
        background-color :#025dad;
    }
`;

export const MoreInfoBtn = Styled.button`
    ${btn}
    background-color: #6C757D;

    &: hover {
        background-color: #5a6269;
    }
`;

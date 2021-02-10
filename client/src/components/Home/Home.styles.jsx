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
    outline: none;
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
    color: black;
`;

export const DescText = Styled.p`
    color: black;
    font-weight: bold;
`;

export const ButtonsContainer = Styled.div`
    text-align: center;
`;

export const RegisterBtn = Styled.button`
    ${btn}
    background-color: #FF217D;

    &: hover {
        background-color: #CF1B5D;
    }
`;

export const MoreInfoBtn = Styled.button`
    ${btn}
    background-color: #4DDB6E;

    &: hover {
        background-color: #3CAB56;
    }
`;

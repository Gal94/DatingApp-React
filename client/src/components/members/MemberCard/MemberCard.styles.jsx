import Styled from 'styled-components';

export const MemberCardContainer = Styled.div`
    max-height: fit-content;
    width: 10rem;
    text-align: center;
    border: 2px solid #f0f0f0;
    border-radius: 0.2rem;
    margin-bottom: 1rem;
    margin-right: 2rem;

    &:hover img {
        transform: scale(1.2, 1.2);
        transition-duration: 500ms;
        transition-timing-function: ease-out;
        opacity: .8;
    }

    &:hover ul {
        bottom: 0;
        opacity: 1;
    }
`;

export const MemberCardImageWrapper = Styled.div`
    overflow: hidden;
    height: 150px;
    position: relative;
`;

export const MemberCardImage = Styled.img`
    height: 150px;
    width: 100%; 
    overflow: hidden;
    transform: scale(1.0, 1.0);
    transition-duration: 500ms;
    transition-timing-function: ease-out;

`;

export const MemberDetailContainer = Styled.div`
    margin-top: 0.5rem;
`;

export const MemberName = Styled.p`
    margin: 0;
    font-weight: bold;
`;

export const Icon = Styled.i.attrs(() => {
    return { className: 'fas fa-user' };
})`
    color: black;
    margin-right: .5rem;
`;

export const MemberCity = Styled.p`
    margin: 0;
    font-size: .9rem;
    color: #b8b8b8;
    font-weight: 500;
`;

export const ButtonsWrap = Styled.ul`
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    padding: 0;
    // left: 10%;
    bottom: -30%;
    opacity: 0;
    list-style: none;
    transition: all .5s ease-out;
`;

export const IconButton = Styled.li`
    cursor: pointer;
    background-color: #FF217D;
    padding: 0;
    margin: 0;
    color: white;
    padding: .75rem;
    border-radius: .3rem;
`;

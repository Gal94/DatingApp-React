import Styled, { css } from 'styled-components';

export const MemberDetailInfoTabContainer = Styled.div`
margin-left: 2rem;
width: 40rem;
`;

export const MemberDetailInfoOptions = Styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    // border-bottom: 2px solid #e0e0e0;
    width: 100%;
`;

const getActiveStatus = (props) => {
    if (props.active) {
        return css`
            color: black;
            border-bottom: 3px solid #ff217d;
        `;
    }
};

export const MemberDetailInfoOption = Styled.li`
    padding: .5rem 1rem;
    font-size: 14px;
    font-weight: 500;
    color: #FF217D;
    cursor: pointer;
    border-bottom: 2px solid #e0e0e0;
    ${getActiveStatus}

    &:hover {
        color: black;
        border-bottom: 3px solid #FF217D;
    }

    &:last-child {
        width: 13rem;
        padding: 0;
        margin: 0;

        &:hover {
            border-bottom: 2px solid #e0e0e0;
            color: #ff217d;
            cursor: initial;
        }
    }
`;

export const MemberDetailInfoTitle = Styled.h4`
    margin: 1rem 0 .25rem;
    padding: 0;
    font-weight: 500;
    font-size: 18px;
`;

export const MemberDetailInfoText = Styled.p`
    margin: 0;
    margin-bottom: 1.5rem;
    padding: 0;
    font-size: 13px;
    overflow: hidden;
`;

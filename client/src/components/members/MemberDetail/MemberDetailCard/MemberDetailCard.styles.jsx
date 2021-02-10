import Styled, { css } from 'styled-components';

const borderStyle = css`
    border: 2px solid #e0e0e0;
    border-radius: 0.2rem;
`;

export const MemberDetailCard = Styled.div`
    ${borderStyle}
    min-width: 15rem;
    padding-top: 1rem;
`;

export const MemberDetailImageWrapper = Styled.div`

${borderStyle}
width: 13rem;
height: 13rem;
margin: 0 auto;
padding: 0;
`;

export const MemberDetailImage = Styled.img`
    width: 100%;
    height: 100%;
    padding: .1rem;
`;

export const MemberDetailInfoContainer = Styled.div`
    width: 13rem;
    margin: 1rem auto .5rem;
`;

export const MemberDetailTitle = Styled.h4`
    margin: 0;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.1px;
`;

export const MemberDetailInfo = Styled.p`
    margin: 0;
    margin-bottom: .75rem;
    font-size: 12px;
    font-weight: 500;
`;

export const MemberInfoButtonsContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    width: 13rem;
    margin: 0 auto .5rem;
`;

const Btn = css`
    color: white;
    width: 6rem;
    text-align: center;
    border-radius: 0.2rem;
    font-size: 14px;
    padding: 0.25rem;
    cursor: pointer;
`;

export const MemberInfoLikeBtn = Styled.div`
    ${Btn}
    background-color: #FF217D;

    &:hover {
        background-color: #CF1B5D;
    }
`;

export const MemberInfoMessageBtn = Styled.div`
    ${Btn}
    background-color: #4DDB6E;

    &:hover {
        background-color: #3CAB56;
    }
`;

import Styled, { css } from 'styled-components';

export const Section = Styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    position: relative;
    overflow-x: hidden;
`;

export const UpperSectionTitle = Styled.h1`
    margin: 0;
    padding: 0;
    font-size: 36px;
    width: 20rem;
`;

const display = (props) => {
    if (props.changed) {
        return css`
            opacity: 1;
            transform: translateX(0);
        `;
    } else {
        return css`
            opacity: 0;
        `;
    }
};

export const UpperSectionChanged = Styled.div`
    overflow: hidden;
    position: absolute;
    right: 0;
    transform: translateX(100%);
    background-color: #abcf08;
    transition: all .75s ease-in-out;
    width: 70%;
    border-radius: 0.3rem;
    ${display}
`;

export const UpperSectionChangedText = Styled.p`
    font-size: 15px;
    padding: 0 1rem;
    font-weight: 400;
    color: #4c5c00;
`;

export const UpperSectionBold = Styled.span`
    font-weight: 700;
`;

export const MemberEditCard = Styled.div`
    margin: 0;
    padding: 0;
    width: 20rem;
    border: 2px solid #d0d0d0;
    border-radius: .3rem;
`;

export const MemberEditImageWrap = Styled.div`
    overflow: hidden;
`;

export const MemberEditImage = Styled.img`
    min-width: 100%;
    border-bottom: 2px solid #d0d0d0;
    border-radius: .1rem;
`;

export const MemberEditInfoContainer = Styled.div`
    padding: 0 1rem;
    border-bottom: 2px solid #d0d0d0;
`;

export const MemberEditBtnContainer = Styled.div`
    
`;

const btnActive = css`
    background-color: #4ddb6e;
    text-align: center;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #3cab56;
    }
`;

const changed = (props) => {
    if (!props.disabled) {
        return btnActive;
    }
};

export const MemberEditBtn = Styled.button`
    width: 90%;
    border: 1px solid #efefef;
    margin: .5rem 0;
    margin-left: 1rem;
    padding: .5rem;
    border-radius: .3rem;
    font-weight: 500;
    outline: none;
    ${changed}
`;

export const MemberEditFieldsContainer = Styled.div`
    width: 70%;
`;

export const MemberEditAboutContainer = Styled.div`
    margin-top: 1rem;
`;

export const MemberEditAboutTitle = Styled.h1`
    margin: .5rem 0 0;
    padding: 0;
    font-size: 24px;
`;

export const MemberEditAboutTextArea = Styled.textarea`
    width: 100%;
    height: 6rem;
    border: 2px solid #efefef;
    border-radius: .3rem;
    padding: .5rem 1rem .5rem .5rem;
    font-size: 14px;
    resize: none;
    outline: none;
`;

export const MemberEditLocationDetailsContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    width: 65%;
`;

export const MemberEditLocationTitle = Styled.label`
    margin-top: .5rem;
    margin-right: .5rem;
    display: inline-block;
`;

export const MemberEditLocationInput = Styled.input`
    margin-top: .5rem;
    width: 12rem;
    height: 30px;
    font-size: 14px;
    padding-left: .5rem;
    border: 1px solid #c0c0c0;
    border-radius: .2rem;
    outline: none;
`;

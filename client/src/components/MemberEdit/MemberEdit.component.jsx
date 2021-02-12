import { useState, useEffect } from 'react';
import {
    MemberDetailInfo,
    MemberDetailTitle,
} from '../members/MemberDetail/MemberDetailCard/MemberDetailCard.styles';
import {
    Section,
    UpperSectionBold,
    UpperSectionChanged,
    UpperSectionChangedText,
    UpperSectionTitle,
    MemberEditCard,
    MemberEditImageWrap,
    MemberEditImage,
    MemberEditInfoContainer,
    MemberEditBtnContainer,
    MemberEditBtn,
} from './MemberEdit.styles';

const MemberEdit = (props) => {
    const [description, setDescription] = useState();
    const [lookingFor, setLookingFor] = useState();
    const [interests, setInterests] = useState();
    const [city, setCity] = useState();
    const [country, setCountry] = useState();
    const [changed, setChanged] = useState(false);

    useEffect(() => {
        setDescription(props.user.introduction);
        setLookingFor(props.user.lookingFor);
        setInterests(props.user.interests);
        setCity(props.user.city);
        setCountry(props.user.country);
    }, []);
    console.log(props.user);

    return (
        <div>
            <Section>
                <UpperSectionTitle>Your Profile</UpperSectionTitle>
                <UpperSectionChanged>
                    <UpperSectionChangedText>
                        <UpperSectionBold>Information: </UpperSectionBold>
                        You have made changes. Any unsaved changes will be lost.
                    </UpperSectionChangedText>
                </UpperSectionChanged>
            </Section>
            <Section>
                <MemberEditCard>
                    <MemberEditImageWrap>
                        <MemberEditImage src={props.user.photoUrl} />
                    </MemberEditImageWrap>
                    {/* TODO: Export to a new component */}
                    <MemberEditInfoContainer>
                        <MemberDetailTitle>Location:</MemberDetailTitle>
                        <MemberDetailInfo>{`${props.user.city}, ${props.user.country}`}</MemberDetailInfo>
                        <MemberDetailTitle>Age:</MemberDetailTitle>
                        <MemberDetailInfo>{props.user.age}</MemberDetailInfo>
                        <MemberDetailTitle>Last Active:</MemberDetailTitle>
                        <MemberDetailInfo>
                            {props.user.lastActive}
                        </MemberDetailInfo>
                        <MemberDetailTitle>Member Since:</MemberDetailTitle>
                        <MemberDetailInfo>
                            {props.user.created}
                        </MemberDetailInfo>
                    </MemberEditInfoContainer>
                    <MemberEditBtnContainer>
                        <MemberEditBtn disabled={!props.changed}>
                            Save Changes
                        </MemberEditBtn>
                    </MemberEditBtnContainer>
                </MemberEditCard>
            </Section>
        </div>
    );
};

export default MemberEdit;

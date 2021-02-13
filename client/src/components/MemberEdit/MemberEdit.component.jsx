import { useState, useEffect } from 'react';
import {
    MemberDetailInfo,
    MemberDetailTitle,
} from '../members/MemberDetail/MemberDetailCard/MemberDetailCard.styles';
import {
    MemberDetailInfoOption,
    MemberDetailInfoOptions,
} from '../members/MemberDetail/MemberDetailInfoTab/MemberDetailInfoTab.styles';
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
    MemberEditFieldsContainer,
    MemberEditAboutContainer,
    MemberEditAboutTitle,
    MemberEditAboutTextArea,
    MemberEditLocationDetailsContainer,
    MemberEditLocationTitle,
    MemberEditLocationInput,
} from './MemberEdit.styles';

const MemberEdit = (props) => {
    const [description, setDescription] = useState();
    const [lookingFor, setLookingFor] = useState();
    const [interests, setInterests] = useState();
    const [city, setCity] = useState();
    const [country, setCountry] = useState();
    const [changed, setChanged] = useState(false);
    const [selectedTab, setSelectedTab] = useState('About');

    useEffect(() => {
        setDescription(props.user.introduction);
        setLookingFor(props.user.lookingFor);
        setInterests(props.user.interests);
        setCity(props.user.city);
        setCountry(props.user.country);
    }, []);

    let tabContent = () => {
        switch (selectedTab) {
            case 'Photos':
                return <div>Photos edit will be here</div>;
            default:
                return (
                    <MemberEditAboutContainer>
                        <MemberEditAboutTitle>Description</MemberEditAboutTitle>
                        <MemberEditAboutTextArea
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                                setChanged(true);
                            }}
                        ></MemberEditAboutTextArea>
                        <MemberEditAboutTitle>Looking For</MemberEditAboutTitle>
                        <MemberEditAboutTextArea
                            value={lookingFor}
                            onChange={(e) => {
                                setLookingFor(e.target.value);
                                setChanged(true);
                            }}
                        ></MemberEditAboutTextArea>
                        <MemberEditAboutTitle>Interests</MemberEditAboutTitle>
                        <MemberEditAboutTextArea
                            value={interests}
                            onChange={(e) => {
                                setInterests(e.target.value);
                                setChanged(true);
                            }}
                        ></MemberEditAboutTextArea>
                        <MemberEditAboutTitle>
                            Location Details:
                        </MemberEditAboutTitle>
                        <MemberEditLocationDetailsContainer>
                            <div>
                                <MemberEditLocationTitle htmlFor='city'>
                                    City:
                                </MemberEditLocationTitle>
                                <MemberEditLocationInput
                                    name='city'
                                    value={city ? city : ''}
                                    onChange={(e) => {
                                        setCity(e.target.value);
                                        setChanged(true);
                                    }}
                                ></MemberEditLocationInput>
                            </div>
                            <div>
                                <MemberEditLocationTitle htmlFor='country'>
                                    Country:
                                </MemberEditLocationTitle>
                                <MemberEditLocationInput
                                    name='country'
                                    value={country ? country : ''}
                                    onChange={(e) => {
                                        setCountry(e.target.value);
                                        setChanged(true);
                                    }}
                                ></MemberEditLocationInput>
                            </div>
                        </MemberEditLocationDetailsContainer>
                    </MemberEditAboutContainer>
                );
        }
    };

    let pageContent = <div>Not Loaded</div>;
    if (props.user) {
        pageContent = (
            <div>
                <Section>
                    <UpperSectionTitle>Your Profile</UpperSectionTitle>
                    <UpperSectionChanged>
                        <UpperSectionChangedText>
                            <UpperSectionBold>Information: </UpperSectionBold>
                            You have made changes. Any unsaved changes will be
                            lost.
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
                            <MemberDetailInfo>
                                {props.user.age}
                            </MemberDetailInfo>
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
                            <MemberEditBtn
                                disabled={!changed}
                                onClick={() => {
                                    console.log(description);
                                }}
                            >
                                Save Changes
                            </MemberEditBtn>
                        </MemberEditBtnContainer>
                    </MemberEditCard>
                    <MemberEditFieldsContainer>
                        <MemberDetailInfoOptions>
                            <MemberDetailInfoOption
                                onClick={() => setSelectedTab('About')}
                                active={selectedTab === 'About'}
                            >
                                About {props.user.username}
                            </MemberDetailInfoOption>
                            <MemberDetailInfoOption
                                onClick={() => setSelectedTab('Photos')}
                                active={selectedTab === 'Photos'}
                            >
                                Edit Photos
                            </MemberDetailInfoOption>
                            <MemberDetailInfoOption></MemberDetailInfoOption>
                        </MemberDetailInfoOptions>
                        {tabContent()}
                    </MemberEditFieldsContainer>
                </Section>
            </div>
        );
    }

    return pageContent;
};

export default MemberEdit;

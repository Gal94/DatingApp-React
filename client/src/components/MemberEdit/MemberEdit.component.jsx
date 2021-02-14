import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {
    MemberDetailInfo,
    MemberDetailTitle,
} from '../members/MemberDetail/MemberDetailCard/MemberDetailCard.styles';
import axios from 'axios';
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
    const [introduction, setIntroduction] = useState(props.user.introduction);
    const [lookingFor, setLookingFor] = useState(props.user.lookingFor);
    const [interests, setInterests] = useState(props.user.interests);
    const [city, setCity] = useState(props.user.city);
    const [country, setCountry] = useState(props.user.country);
    const [changed, setChanged] = useState(false);
    const [selectedTab, setSelectedTab] = useState('About');

    // Toggle button if changes have been made
    useEffect(() => {
        if (
            country === props.user.country &&
            introduction === props.user.introduction &&
            lookingFor === props.user.lookingFor &&
            interests === props.user.interests &&
            city === props.user.city
        ) {
            setChanged(false);
        } else setChanged(true);
    }, [introduction, country, lookingFor, interests, city]);

    const fieldChangeHandler = (e, field) => {
        switch (field) {
            case 'desc':
                setIntroduction(e.target.value);
                break;
            case 'lookingFor':
                setLookingFor(e.target.value);
                break;
            case 'interests':
                setInterests(e.target.value);
                break;
            case 'city':
                setCity(e.target.value);
                break;
            case 'country':
                setCountry(e.target.value);
                break;
            default:
                break;
        }
    };

    const updateMemberHandler = async () => {
        const token = JSON.parse(localStorage.getItem('user')).token;
        const data = await axios.put(
            'https://localhost:5001/api/users',
            {
                introduction: introduction,
                lookingFor: lookingFor,
                interests: interests,
                city: city,
                country: country,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log(data);
        toast.success('User updated successfully', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });

        setChanged(false);
    };

    let tabContent = () => {
        switch (selectedTab) {
            case 'Photos':
                return <div>Photos edit will be here</div>;
            default:
                return (
                    <MemberEditAboutContainer>
                        <MemberEditAboutTitle>Description</MemberEditAboutTitle>
                        <MemberEditAboutTextArea
                            value={introduction}
                            onChange={(e) => fieldChangeHandler(e, 'desc')}
                        ></MemberEditAboutTextArea>
                        <MemberEditAboutTitle>Looking For</MemberEditAboutTitle>
                        <MemberEditAboutTextArea
                            value={lookingFor}
                            onChange={(e) =>
                                fieldChangeHandler(e, 'lookingFor')
                            }
                        ></MemberEditAboutTextArea>
                        <MemberEditAboutTitle>Interests</MemberEditAboutTitle>
                        <MemberEditAboutTextArea
                            value={interests}
                            onChange={(e) => fieldChangeHandler(e, 'interests')}
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
                                    onChange={(e) =>
                                        fieldChangeHandler(e, 'city')
                                    }
                                ></MemberEditLocationInput>
                            </div>
                            <div>
                                <MemberEditLocationTitle htmlFor='country'>
                                    Country:
                                </MemberEditLocationTitle>
                                <MemberEditLocationInput
                                    name='country'
                                    value={country ? country : ''}
                                    onChange={(e) =>
                                        fieldChangeHandler(e, 'country')
                                    }
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
                    <UpperSectionChanged changed={changed}>
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
                                onClick={updateMemberHandler}
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

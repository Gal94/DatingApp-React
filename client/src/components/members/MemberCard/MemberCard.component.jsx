import { useHistory } from 'react-router';
import {
    MemberCardContainer,
    MemberCardImage,
    MemberDetailContainer,
    MemberName,
    Icon,
    MemberCity,
    MemberCardImageWrapper,
    ButtonsWrap,
    IconButton,
} from './MemberCard.styles';

const MemberCard = (props) => {
    const history = useHistory();

    // Get current path and attach username
    const onUserDetailHandler = () => {
        history.push(
            `${window.location.pathname}/${props.memberInfo.username}`
        );
    };

    return (
        <MemberCardContainer>
            <MemberCardImageWrapper>
                <MemberCardImage
                    src={props.memberInfo.photoUrl}
                ></MemberCardImage>
                <ButtonsWrap>
                    <IconButton
                        onClick={onUserDetailHandler}
                        className='fas fa-user fa-sm'
                    ></IconButton>
                    <IconButton className='fas fa-heart fa-sm'></IconButton>
                    <IconButton className='fas fa-envelope fa-sm'></IconButton>
                </ButtonsWrap>
            </MemberCardImageWrapper>
            <MemberDetailContainer>
                <MemberName>
                    <Icon></Icon>
                    {props.memberInfo.knownAs}
                </MemberName>
                <MemberCity>{props.memberInfo.city}</MemberCity>
            </MemberDetailContainer>
        </MemberCardContainer>
    );
};

export default MemberCard;

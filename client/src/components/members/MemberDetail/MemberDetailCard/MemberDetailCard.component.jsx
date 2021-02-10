import {
    MemberDetailCard,
    MemberDetailImageWrapper,
    MemberDetailImage,
    MemberDetailInfoContainer,
    MemberDetailTitle,
    MemberDetailInfo,
    MemberInfoButtonsContainer,
    MemberInfoLikeBtn,
    MemberInfoMessageBtn,
} from './MemberDetailCard.styles';

const MemberDetailsCard = (props) => {
    return (
        <MemberDetailCard>
            <MemberDetailImageWrapper>
                <MemberDetailImage src={props.member.photoUrl} />
            </MemberDetailImageWrapper>
            <MemberDetailInfoContainer>
                <MemberDetailTitle>Location:</MemberDetailTitle>
                <MemberDetailInfo>
                    {props.member.city}, {props.member.country}
                </MemberDetailInfo>
                <MemberDetailTitle>Age:</MemberDetailTitle>
                <MemberDetailInfo>{props.member.age}</MemberDetailInfo>
                <MemberDetailTitle>Last Active:</MemberDetailTitle>
                <MemberDetailInfo>{props.member.lastActive}</MemberDetailInfo>
                <MemberDetailTitle>Member Since:</MemberDetailTitle>
                <MemberDetailInfo>{props.member.created}</MemberDetailInfo>
            </MemberDetailInfoContainer>
            <MemberInfoButtonsContainer>
                <MemberInfoLikeBtn>Like</MemberInfoLikeBtn>
                <MemberInfoMessageBtn>Message</MemberInfoMessageBtn>
            </MemberInfoButtonsContainer>
        </MemberDetailCard>
    );
};

export default MemberDetailsCard;

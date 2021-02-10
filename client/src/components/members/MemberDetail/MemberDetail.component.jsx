import MemberDetailsCard from './MemberDetailCard/MemberDetailCard.component';
import MemberDetailInfoTab from './MemberDetailInfoTab/MemberDetailInfoTab.component';

const MemberComponent = (props) => {
    return (
        <div style={{ display: 'flex' }}>
            <MemberDetailsCard member={props.member} />
            <MemberDetailInfoTab member={props.member} />
        </div>
    );
};

export default MemberComponent;

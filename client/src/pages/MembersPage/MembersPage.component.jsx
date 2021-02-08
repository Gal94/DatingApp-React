import { useEffect } from 'react';

const MembersPage = (props) => {
    useEffect(() => {
        props.guarded();
    });
    return <div>MembersPage</div>;
};

export default MembersPage;

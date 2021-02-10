import { useEffect, useState } from 'react';
import axios from 'axios';
import MemberCard from '../../components/members/MemberCard/MemberCard.component';
import { MembersCardsContainer } from './MembersPage.styles';

const MembersPage = (props) => {
    const [members, setMembers] = useState([]);

    const fetchUsers = async (token) => {
        const { data } = await axios.get('https://localhost:5001/api/users/', {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        setMembers(data);
    };

    // Check if  logged in and get members if so
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('user'))?.token || null;
        token ? fetchUsers(token) : props.guarded();
    }, []);

    return (
        <MembersCardsContainer>
            {members.map((member, i) => {
                return <MemberCard key={i} memberInfo={member} />;
            })}
        </MembersCardsContainer>
    );
};

export default MembersPage;

import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getEndOfPath } from '../../Helpers/UrlHelpers';
import MemberComponent from '../../components/members/MemberDetail/MemberDetail.component';

const MemberDetailPage = (props) => {
    const [member, setMember] = useState({});
    const fetchUser = async (token) => {
        const { data } = await axios.get(
            `https://localhost:5001/api/users/${getEndOfPath()}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        if (data) {
            setMember(data);
        } else {
            // export to a helper function
            toast.error('No such user found', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });

            props.guarded();
        }
    };

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('user'))?.token || null;
        token ? fetchUser(token) : props.guarded();
    }, []);
    return <MemberComponent member={member} />;
};

export default MemberDetailPage;

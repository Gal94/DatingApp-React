import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import MemberEdit from '../../components/MemberEdit/MemberEdit.component';

const MemberEditPage = (props) => {
    const [user, setUser] = useState(null);

    const fetchUserByUsername = async (token, username) => {
        const { data } = await axios.get(
            `https://localhost:5001/api/users/${username}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (data) {
            return setUser(data);
        }
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
    };

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('user'))?.token || null;
        const username =
            JSON.parse(localStorage.getItem('user'))?.username || null;
        token && username
            ? fetchUserByUsername(token, username)
            : props.guarded();
    }, []);

    let content = <div>Spinner here</div>;
    if (user) {
        content = <MemberEdit user={user} />;
    }

    return content;
};

export default MemberEditPage;

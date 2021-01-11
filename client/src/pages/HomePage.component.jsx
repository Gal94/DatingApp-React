import { HomePageContainer } from './HomePage.styles';

import { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const { data } = await axios.get('https://localhost:5001/api/users/');
        setUsers(data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <HomePageContainer>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <p>
                            {user.id} - {user.userName}
                        </p>
                    </div>
                );
            })}
        </HomePageContainer>
    );
};

export default HomePage;

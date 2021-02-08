import { HomePageContainer } from './HomePage.styles';

// import { useEffect, useState } from 'react';
// import axios from 'axios';
import Home from '../../components/Home/Home.component';

const HomePage = () => {
    // const [users, setUsers] = useState([]);

    // const fetchUsers = async () => {
    //     const { data } = await axios.get('https://localhost:5001/api/users/');
    //     setUsers(data);
    // };

    // useEffect(() => {
    //     fetchUsers();
    // }, []);
    return (
        <HomePageContainer>
            <Home />
        </HomePageContainer>
    );
};

export default HomePage;

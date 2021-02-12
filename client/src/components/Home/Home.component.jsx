import React, { useState, useEffect } from 'react';
import RegisterForm from '../RegisterForm/RegisterForm.component';
import {
    ButtonsContainer,
    ContentContainer,
    DescText,
    DescTitle,
    HomePageContainer,
    MoreInfoBtn,
    RegisterBtn,
} from './Home.styles';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const Home = (props) => {
    const token = useSelector((state) => state.auth.token);
    const history = useHistory();

    useEffect(() => {
        token && history.push('/members')
    })

    const [displayRegister, setDisplayRegister] = useState(false);
    return (
        <React.Fragment>
            <HomePageContainer>
                <ContentContainer>
                    {!displayRegister && (
                        <React.Fragment>
                            <DescTitle>Find your match</DescTitle>
                            <DescText>
                                {' '}
                                Come on in to view your matches... all you need
                                to do is sign up!
                            </DescText>
                            <ButtonsContainer>
                                <RegisterBtn
                                    onClick={() => setDisplayRegister(true)}
                                >
                                    Register
                                </RegisterBtn>
                                <MoreInfoBtn>Read More</MoreInfoBtn>
                            </ButtonsContainer>
                        </React.Fragment>
                    )}

                    {displayRegister && (
                        <React.Fragment>
                            <RegisterForm
                                cancelRegister={() => setDisplayRegister(false)}
                            />
                        </React.Fragment>
                    )}
                </ContentContainer>
            </HomePageContainer>
        </React.Fragment>
    );
};

export default Home;

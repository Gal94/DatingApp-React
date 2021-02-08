import React, { useState } from 'react';
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

const Home = (props) => {
    const [displayRegister, setDisplayRegister] = useState(false);
    return (
        <HomePageContainer>
            <ContentContainer>
                {!displayRegister && (
                    <React.Fragment>
                        <DescTitle>Find your match</DescTitle>
                        <DescText>
                            {' '}
                            Come on in to view your matches... all you need to
                            do is sign up!
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
    );
};

export default Home;

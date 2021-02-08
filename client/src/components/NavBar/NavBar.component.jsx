import { useSelector } from 'react-redux';
import UserDropdown from '../UserDropdown/UserDropdown.component.jsx';
import LoginForm from '../LoginForm/LoginForm.component.jsx';
import {
    Container,
    NavBarContainer,
    NavItemsContainer,
    SiteLink,
    NavItemsList,
    NavItem,
    NavigationLink,
} from './NavBar.styles.jsx';

const NavBar = (props) => {
    const token = useSelector((state) => state.auth.token);

    //TODO : if logged in display options if not display login form
    return (
        <NavBarContainer color='red'>
            <Container>
                <SiteLink to='/'>DatingApp</SiteLink>
                <NavItemsContainer>
                    {token && (
                        <NavItemsList>
                            <NavItem>
                                <NavigationLink to='/members'>
                                    Matches
                                </NavigationLink>
                            </NavItem>
                            <NavItem>
                                <NavigationLink to='/lists'>
                                    Lists
                                </NavigationLink>
                            </NavItem>
                            <NavItem>
                                <NavigationLink to='/messages'>
                                    Messages
                                </NavigationLink>
                            </NavItem>
                        </NavItemsList>
                    )}
                </NavItemsContainer>
                {!token && <LoginForm />}
                {/* TODO : drop down menu with logout option */}
                {token && <UserDropdown />}
            </Container>
        </NavBarContainer>
    );
};

export default NavBar;

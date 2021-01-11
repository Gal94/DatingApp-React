import { withRouter } from 'react-router-dom';
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
    //TODO : if logged in display options if not display login form
    return (
        <NavBarContainer color='red'>
            <Container>
                <SiteLink to='/'>DatingApp</SiteLink>
                <NavItemsContainer>
                    <NavItemsList>
                        <NavItem>
                            <NavigationLink to='/'>SOME TEXT</NavigationLink>
                        </NavItem>
                        <NavItem>
                            <NavigationLink to='/'>SOME TEXT</NavigationLink>
                        </NavItem>
                        <NavItem>
                            <NavigationLink to='/'>SOME TEXT</NavigationLink>
                        </NavItem>
                    </NavItemsList>
                </NavItemsContainer>
                <LoginForm />
            </Container>
        </NavBarContainer>
    );
};

export default NavBar;

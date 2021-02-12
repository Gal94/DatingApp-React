import { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/actions/auth';

import {
    Divider,
    DropdownAnchor,
    DropdownMenu,
    MenuLink,
    TriangleSpan,
    UserDropdownContainer,
} from './UserDropdown.styles';

const UserDropdown = (props) => {
    const [showDropdown, setShowDropdown] = useState(false);

    let history = useHistory();

    const showDropdownHandler = () => {
        setShowDropdown(!showDropdown);
    };

    const logout = () => {
        props.onLogoutHandler();
        history.push('/');
    };

    return (
        <UserDropdownContainer>
            <DropdownAnchor onClick={showDropdownHandler}>
                Welcome{' '}
                {`${
                    props.username.charAt(0).toUpperCase() +
                    props.username.slice(1)
                }`}
                <TriangleSpan onClick={showDropdownHandler}></TriangleSpan>{' '}
            </DropdownAnchor>
            <DropdownMenu className={showDropdown ? 'show' : null}>
                <MenuLink
                    onClick={() => setShowDropdown(false)}
                    to='/members/edit'
                >
                    Edit Profile
                </MenuLink>
                <Divider></Divider>
                <MenuLink
                    onClick={() => setShowDropdown(false)}
                    to='#'
                    onClick={logout}
                >
                    Logout
                </MenuLink>
            </DropdownMenu>
        </UserDropdownContainer>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogoutHandler: () => dispatch(logout()),
    };
};

const mapStateToProps = (state) => {
    return {
        username: state.auth.username,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);

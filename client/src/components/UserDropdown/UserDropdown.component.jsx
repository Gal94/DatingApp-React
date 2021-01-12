import { useState } from 'react';
import { connect } from 'react-redux';
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
    const showDropdownHandler = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <UserDropdownContainer>
            <DropdownAnchor onClick={showDropdownHandler}>
                Welcome user{' '}
                <TriangleSpan onClick={showDropdownHandler}></TriangleSpan>{' '}
            </DropdownAnchor>
            <DropdownMenu className={showDropdown ? 'show' : null}>
                <MenuLink to='#'>Edit Profile</MenuLink>
                <Divider></Divider>
                <MenuLink to='#' onClick={props.onLogoutHandler}>
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

export default connect(null, mapDispatchToProps)(UserDropdown);

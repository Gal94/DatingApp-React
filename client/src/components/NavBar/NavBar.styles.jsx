import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const getBackgroundColor = (props) => {
    return props.color || 'black';
};

export const NavBarContainer = Styled.nav`
    background-color: ${getBackgroundColor};
    position: fixed;
    top:0;
    right:0;
    left:0;
    z-index: 10;
    background-color: #212529;
    display: flex;
    align-items: center;
    padding-top: .5rem;
    padding-bottom: .5rem;

    @media(min-width: 768px) {
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    & > Container
`;

export const Container = Styled.div`
    width: 100%;
    padding-right: .75rem;
    padding-left: .75rem;
    margin-right: auto;
    margin-left: auto;
    display: inherit;
`;

export const SiteLink = Styled(Link)`
    color: #fff;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.25rem;
    text-decoration: none;
    white-space: no-wrap;
    display: flex;
    align-items: center;
`;

export const NavItemsContainer = Styled.div`

    align-items: center;
    width: 100%;

    @media(min-width: 768px) {
        display: flex;
    }
`;

export const NavItemsList = Styled.ul`
    display: flex;
    padding-left: 0;
    align-items: center;
    list-style: none;
    margin: 0;
    height: 100%;
`;

export const NavItem = Styled.li`
    height: inherit;
    padding-top: 4px;
`;

export const NavigationLink = Styled(Link)`

    height: inherit;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: rgba(255,255,255, .55);


    @media(min-width: 768px) {
        padding-right: .5rem;
        padding-left: .5rem;
    }
`;
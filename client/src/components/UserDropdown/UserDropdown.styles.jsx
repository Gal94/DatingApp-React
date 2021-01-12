import { Link } from 'react-router-dom';
import Styled from 'styled-components';

export const UserDropdownContainer = Styled.div`
    position: relative;
    width: 20rem;
    display: flex;
    align-items: center;
`;

export const DropdownAnchor = Styled.a`
    color: #f8f9fa;
    position: relative;
    cursor: pointer;
    user-select: none;

    &:hover {
        color: #dae0e5;
        text-decoration: underline;
    }

`;

export const TriangleSpan = Styled.span`
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #fff;
    height: 0;
    width: 0;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: -1rem;
    
`;

export const DropdownMenu = Styled.div`
    position: absolute;
    z-index: 9;
    float: left;
    min-width: 10rem;
    padding: .5rem 0;
    // margin: .125rem 0;
    margin-top: .5rem;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .25rem;
    top: 100%;
    display: none;

    &.show {
        display: block;
    }
`;

export const MenuLink = Styled(Link)`
    display: block;
    width: 100%;
    padding: .25rem 1.5rem;
    clear: both;
    color: #212529;
    text-align: left;
    white-space: no-wrap;
    background-color: transparent;
    border: 0;
    text-decoration: none;
`;

export const Divider = Styled.div`
    height: 0;
    margin: .5rem 0;
    overflow: hidden;
    border-top: 1px solid #e9ecef;
`;

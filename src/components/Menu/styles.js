import styled from 'styled-components';
import { MENU_HEIGHT } from '../../constants/styles';

export const MenuWrapper = styled.div `
    border: 1px solid #ccc;
    width: 100%;
    height: ${MENU_HEIGHT}px;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    a {
        flex: 1;
        text-decoration: none;
    }
`;

export const MenuItemWrapper = styled.section `
    border-left: 1px solid #ccc;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex: 1;
    svg {
        color: #4a148c;
        font-size: 1.4em;
    }
    p {
        color: #4a148c;
        margin: 5px 0px;
    }
    &:hover {
        background-color: #4a148c;
        svg {
            color: #fff;
        }
        p {
            color: #fff;
        }
    }
`

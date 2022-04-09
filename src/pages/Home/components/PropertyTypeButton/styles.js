import styled from 'styled-components';

export const PropertyTypeButtonWrapper = styled.div `
    background-color: #f3e5f5;
    border-radius: 10px;
    min-width: 100px;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        color: #4a148c
    }
    &:hover {
        background: #4a148c;
        svg {
            color: #fff;
        }
        p {
            color: #fff;
        }
    }
`;

export const IconWrapper = styled.div `
    margin-top: 10px;
    svg {
        font-size: 2em;
        color: #4a148c
    }
`
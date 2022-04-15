import styled from 'styled-components';

export const ProfileInfoWrapper = styled.div `
    border-radius: 10px;
    margin: 10px 10px;
    min-width: 100px;
    justify-content: center;
    display: flex;
    img {
        width: 10%;
        border-radius: inherit;
    }

`;

export const NameWrapper = styled.div `
    margin: 0 10px;
    flex-grow: 1;
    p {
        font-size: 1em;
        color: #bbb;
        margin: 0px 10px;
    }
    .name {
        font-size: 1.1em;
        color: black;
        font-weight: 800;
    }
`;

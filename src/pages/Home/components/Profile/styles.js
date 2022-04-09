import styled from 'styled-components';

export const ProfileWrapper = styled.div `
    background-color: #f3e5f5;
    border-radius: 10px;
    margin: 0 10px;
    min-width: 100px;
    justify-content: center;
`;

export const NameWrapper = styled.div `
    background-color: #f3e5f5;
    border-radius: 10px;
    margin: 0 10px;
    flex-grow: 1;
   p {
        font-size: 1.1em;
        color: gray;
        height: 10px;
    }
    .name {
        font-size: 1.3em;
        color: black;
        font-weight: 800;
        height: 10px;
    }
`;

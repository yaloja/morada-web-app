import styled from 'styled-components';

export const ProfileWrapper = styled.div `
    margin: 0 10px;
    min-width: 100px;
`;

export const NameWrapper = styled.div `
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

import styled from 'styled-components';

export const PropertyCardWrapper = styled.div`
    border: 1px solid #ccc;
    border-radius: 12px;
    margin: 10px;
    box-shadow: 5px 2px 7px 0px rgba(194,194,194,0.75);
    -webkit-box-shadow: 5px 2px 7px 0px rgba(194,194,194,0.75);
    -moz-box-shadow: 5px 2px 7px 0px rgba(194,194,194,0.75);
    padding: 10px;
    display: flex;
`;

export const PropertyCardImageWrapper = styled.div`
    flex: 30;
    border-radius: 12px;
    img {
        width: 100%;
        border-radius: inherit;
    }
`;

export const PropertyCardInfoWrapper = styled.div`
    flex: 70;
    margin-left: 10px;
    h3 {
        margin: 0;
    }
`;
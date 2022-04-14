import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
   body {
    margin: 0px;
    padding: 0px;
    font-family: "Lato";
   } 
`

export const Subtitle = styled.p`
   color: #aaa;
   font-size: 1em;
   text-transform: capitalize;
   margin: 3px;
`
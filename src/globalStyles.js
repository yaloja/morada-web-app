import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
   body {
    margin: 0px;
    padding: 0px;
    font-family: "Lato";
   } 
`;

export const Subtitle = styled.p`
   color: #c0c2d2;
   font-size: 1em;
   text-transform: capitalize;
   margin: 3px;
`;

export const PageTitle = styled.h1`
   color: #222;
   font-size: 2.8em;
   font-weight: 300;
`;

export const FormControl = styled.div`
   display: flex;
   flex-direction: column;
   margin: 5px 0;
   border-radius: 6px;
   background-color: #f2f2f2;
   label {
      font-size: 0.95em;
      color: #222;
      font-weight: 500;
   }
   input[type="email"], input[type="password"], input[type="text"], input[type="phone"] {
      font-size: 1.1em;
      padding: 5px 10px;
      margin: 5px;
      background-color: inherit;
   }
   select {
      font-size: 1.1em;
      padding: 5px 10px;
      margin: 5px;
      background-color: inherit;
   }
`;
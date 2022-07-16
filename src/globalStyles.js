import styled, {createGlobalStyle} from "styled-components";
import { MENU_HEIGHT } from "./constants/styles";

export const GlobalStyle = createGlobalStyle`
   *, ::after, ::before {
        box-sizing: border-box;
    }

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

export const FooterFixed = styled.footer`
   position: fixed;
   bottom: ${MENU_HEIGHT + 5}px;
   left: 0;
   width: 100%;
`;

export const FormControl = styled.div`
   display: flex;
   margin: 5px 0;
   border-radius: 6px;
   background-color: #f2f2f2;
`;

export const FormControlInput = styled.div`
   flex: 1;
   label {
      display: block;
      width: 100%;
      font-size: 1em;
      color: #4a148c;
      font-weight: 600;
      margin: 5px;
   }
   input[type="email"], input[type="password"], input[type="text"], input[type="phone"], input[type="number"] {
      display: block;
      width: 100%;
      font-size: 1em;
      background-color: inherit;
      border: none;
      margin: 5px;
   }
   select {
      display: block;
      width: 100%;
      font-size: 1em;
      background-color: inherit;
      border: none;
      margin: 5px;
   }
   textarea {
      display: block;
      width: 100%;
      height: 65px;
      font-size: 1.3em;
      background-color: inherit;
      border: none;
      margin: 5px;
   }
   span {
        color: red;
        font-size: 0.8em;
    }
`;

export const FormControlAction = styled.div`
   display: flex;
   align-items: center;
`;
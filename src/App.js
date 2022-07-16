import React from "react";
import { BrowserRouter } from "react-router-dom";
import { UserContextStore } from "./contexts/UserContext";
import { GlobalStyle } from "./globalStyles";
import { Navigation } from "./Navigation";

export const App = () => (
    <BrowserRouter>
        <UserContextStore>
                <GlobalStyle/>
                <Navigation/>
        </UserContextStore>
    </BrowserRouter>
)
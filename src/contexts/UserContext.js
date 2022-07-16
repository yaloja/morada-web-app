import React from "react";
import {createContext, useState} from 'react';

const initialState = {
    role: 0,
    typeId: '',
    identification: '',
    name: '',
    email: '',
    phone: '',
    isAuth: false
};

export const UserContext = createContext(initialState);

export const UserContextStore = (props) => {
    
    const [user, setUser] = useState(initialState);

    return (
        <UserContext.Provider value={{user, setUser}}>
            { props.children }
        </UserContext.Provider>
    )
}
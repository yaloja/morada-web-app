import React from "react";
import {createContext, useState} from 'react';

const initialState = {
    role: 1,
    typeId: '',
    identification: '',
    name: '',
    email: '',
    phone: '',
    _id: '',
    isAuth: false,
    userId: ''
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
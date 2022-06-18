import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { Account } from './pages/Account';
import { Favorites } from './pages/Favorites';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { Property } from './pages/Property';
import { SignUp } from './pages/SignUp';
import { AddProperty } from './pages/AddProperty';

export const Navigation = () => (
    <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Home/>}/>
            <Route path = '/property' element = {<Property/>} />
            <Route path = '/account' element = {<Account/>} />
            <Route path = '/favorites' element = {<Favorites/>} />
            <Route path = '/login' element = {<Login/>} />
            <Route path = '/signup' element = {<SignUp/>} />
            <Route path = '/add-property' element = {<AddProperty/>} />
            <Route path = '*' element = {<NotFound/>} />
        </Routes>
    </BrowserRouter>
)
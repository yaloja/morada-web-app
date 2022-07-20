import React, { useContext, useEffect } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { Account } from './pages/Account';
import { Favorites } from './pages/Favorites';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { Property } from './pages/Property';
import { SignUp } from './pages/SignUp';
import { AddProperty } from './pages/AddProperty';
import { getToken, removeToken } from "./utils/TokenLS";
import { UserContext } from "./contexts/UserContext";
import { HTTP_VERBS, requestHttp } from "./utils/HttpRequest";

export const Navigation = () => {

    const {user, setUser} = useContext(UserContext);
    const location = useLocation();

    useEffect(() => {
        checkUserAuth();
    }, [location]);

    const checkUserAuth = async () => {
        const token = getToken();
        if(token && !user.isAuth) {
            await requestGetUserInfo(token);
        }
    } 

    const requestGetUserInfo = async (token) => {
        try {
          const response = await requestHttp({
            method: HTTP_VERBS.GET,
            endpoint: '/users/info',
            token
          });
          const {data} = response;
          setUser({
            name: data.user.name,
            role: data.user.role,
            typeId: data.user.documentType,
            identification: data.user.document,
            email: data.user.email,
            phone: data.user.phone,
            isAuth: true
          })
          console.log('data', data);
        } catch(error) {
          console.log('error', error);
          removeToken();
        }
    }

    return (
        <Routes>
                <Route path = '/' element = {<Home/>}/>
                <Route path = '/property/:idProperty' element = {<Property/>} />
                <Route path = '/account' element = {<Account/>} />
                <Route path = '/favorites' element = {<Favorites/>} />
                <Route path = '/login' element = {<Login/>} />
                <Route path = '/signup' element = {<SignUp/>} />
                <Route path = '/add-property' element = {<AddProperty/>} />
                <Route path = '*' element = {<NotFound/>} />
        </Routes>
    );
}
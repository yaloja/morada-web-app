import React from "react";
import { useState } from "react"
import { Page } from "../../components/Page"
import { Button } from "../../components/Button"
import { FormControl, FormControlInput, PageTitle, FormControlAction} from "../../globalStyles"
import { Link } from "react-router-dom"
import { ButtonIcon } from "../../components/ButtonIcon"
import { IoEye, IoEyeOff} from 'react-icons/io5'
import { requestHttp } from "../../utils/HttpRequest"


export const Login = () => {
   
    const [visiblePass, setVisiblePass] = useState(false)

    const tooglePasswordVisible = () => {
        setVisiblePass(!visiblePass);
    }

    const loginHandler = async () => {
        try {
            const data = {
                email: "yaloj@gmail.com",
                password: "Tomas2015."
            };
            const response = await requestHttp (
                {
                    endpoint: "/users/login",
                    body: data
                }
            );
            console.log(response);
        } catch (error) {
            console.log('error', error);
        }
    }

    return (
    <Page hideMenu>
            <PageTitle>Iniciar sesion</PageTitle>
            <br/>
            <form>
                <FormControl>
                    <FormControlInput>
                        <label>Correo electrónico</label>
                        <input type="email"/>
                    </FormControlInput>
                </FormControl>
                <FormControl>
                    <FormControlInput>
                        <label>Contraseña</label>
                        <input type={visiblePass ? "text" : "password"}/>
                    </FormControlInput>
                    <FormControlAction>
                        <ButtonIcon icon={visiblePass ? IoEyeOff : IoEye} onPress={tooglePasswordVisible}></ButtonIcon>
                    </FormControlAction>
                </FormControl>
                <br/> 
                <Button label="Ingresar" onPress={ loginHandler }></Button>
            </form>
            <br/>
            <Link to='/signup'>Regístrate como usuario</Link> 
            <br/><br/>
            <Link to='/'>Home</Link>
        </Page>
   )
}
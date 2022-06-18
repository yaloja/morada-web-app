import React from "react";
import { useState } from "react"
import { Page } from "../../components/Page"
import { PageTitle } from "../../globalStyles"
import { Button } from "../../components/Button"
import { FormControl, FormControlInput, FormControlAction} from "../../globalStyles"
import { Link } from "react-router-dom"
import {IoEyeOff, IoEye } from 'react-icons/io5'
import { ButtonIcon } from "../../components/ButtonIcon"

export const SignUp = () => {
    
    const [visiblePass, setVisiblePass] = useState(false)

    const tooglePasswordVisible = () => {
        setVisiblePass(!visiblePass);
    }
    
    return (
        <Page hideMenu>
            <PageTitle>Registro de usuario</PageTitle>
            <br/>
            <form>
                <FormControl>
                    <FormControlInput>
                        <label>Tipo Identificación</label>
                        <select name="combo">
                            <option value="1" selected>Cédula de ciudadanía</option>
                            <option value="2">Cédula de extranjería</option> 
                            <option value="3">Nit</option>
                        </select>
                    </FormControlInput>
                </FormControl>
                
                <FormControl>
                    <FormControlInput>
                        <label>Identificación</label>
                        <input type="text"/>
                    </FormControlInput>
                </FormControl>

                <FormControl>
                    <FormControlInput>
                        <label>Nombre completo</label>
                        <input type="text"/>
                    </FormControlInput>
                </FormControl>
                
                <FormControl>
                    <FormControlInput>
                        <label>Teléfono</label>
                        <input type="phone"/>
                    </FormControlInput>
                </FormControl>
                
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
            
                <FormControl>
                    <FormControlInput>
                            <label>Confirmar contraseña</label>
                            <input type={visiblePass ? "text" : "password"}/>
                        </FormControlInput>
                        <FormControlAction>
                            <ButtonIcon icon={visiblePass ? IoEyeOff : IoEye} onPress={tooglePasswordVisible}></ButtonIcon>
                    </FormControlAction>
                </FormControl>
            
                <br/> 
                <Button label="Registrarse" onPress={ () => alert('Usuario registrado')}></Button>
            </form>
                <h4>Ya tienes una cuenta?</h4><Link to='/login'>Inicia sesion</Link>
            
        </Page>
    );
}
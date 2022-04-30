import { useState } from "react"
import { Page } from "../../components/Page"
import { Button } from "../../components/Button"
import { FormControl, FormControlInput, PageTitle, FormControlAction} from "../../globalStyles"
import { Link } from "react-router-dom"
import { ButtonIcon } from "../../components/ButtonIcon"
import { IoEye, IoEyeOff} from 'react-icons/io5'


export const Login = () => {
   
    const [visiblePass, setVisiblePass] = useState(false)

    const tooglePasswordVisible = () => {
        setVisiblePass(!visiblePass);
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
                <Button label="Ingresar" onPress={ () => alert('Iniciar sesión')}></Button>
            </form>
            <br/>
            <Link to='/signup'>Regístrate como usuario</Link> 
            <br/><br/>
            <Link to='/'>Home</Link>
        </Page>
   )
}
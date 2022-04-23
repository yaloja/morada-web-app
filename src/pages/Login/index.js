import { Page } from "../../components/Page"
import { PageTitle } from "../../globalStyles"
import { Button } from "../../components/Button"
import { FormControl } from "../../globalStyles"

export const Login = () => (
    <Page hideMenu>
        <PageTitle>Iniciar sesion</PageTitle>
        <br/>
        <form>
            <FormControl>
                <label>Correo electrónico</label>
                <input type="email"/>
            </FormControl>
            <FormControl>
                <label>Contraseña</label>
                <input type="password"/>
            </FormControl>
            <br/> 
            <Button label="Ingresar" onPress={ () => alert('Iniciar sesión')}></Button>
        </form>
    </Page>
)

import { Page } from "../../components/Page"
import { PageTitle } from "../../globalStyles"
import { Button } from "../../components/Button"
import { FormControl } from "../../globalStyles"
import { Link } from "react-router-dom"

export const SignUp = () => (
    <Page hideMenu>
        <PageTitle>Registro de usuario</PageTitle>
        <br/>
        <form>
            <FormControl>
                <label>Tipo Identificación</label>
                <select name="combo">
                    <option value="1" selected>Cédula de ciudadanía</option>
                    <option value="2">Cédula de extranjería</option> 
                    <option value="3">Nit</option>
                </select>
            </FormControl>
            <FormControl>
                <label>Nombre completo</label>
                <input type="text"/>
            </FormControl>
            <FormControl>
                <label>Teléfono</label>
                <input type="phone"/>
            </FormControl>
            <FormControl>
                <label>Correo electrónico</label>
                <input type="email"/>
            </FormControl>
            <FormControl>
                <label>Contraseña</label>
                <input type="password"/>
            </FormControl>
            <FormControl>
                <label>Confirmar Contraseña</label>
                <input type="password"/>
            </FormControl>
            <br/> 
            <Button label="Registrarse" onPress={ () => alert('Usuario registrado')}></Button>
        </form>
            <h4>Ya tienes una cuenta?</h4><Link to='/login'>Inicia sesion</Link>
          
    </Page>
)
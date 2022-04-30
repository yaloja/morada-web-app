import { Page } from "../../components/Page"
import { PageTitle, FooterFixed } from "../../globalStyles"
import { Button } from "../../components/Button";

export const Account = () => {
    
    const isAuth = false;

    const UserInfo = () => (
        <div>
            <h3>Yarleidy Lopera Jaramillo</h3>
            <h5>43974808</h5>
            <p>yaloja@gmail.com</p>
            <hr />
            <FooterFixed>
                <Button 
                    label = "Cerrar sesion" 
                    onPress={ () => { alert('cerrar sesion') } }
                />
            </FooterFixed>
        </div>
    )

    const UserUnAuthorized = () => (
        <div>
            <h2>Usuario no autenticado</h2>
            <p>Debe iniciar sesion para acceder a su perfil</p>
            <hr/>
            <Button 
                label = "Iniciar sesion"
                linkTo = "/login"
            />
        </div>
    )

    return (
        <Page>
            <PageTitle>Mi cuenta</PageTitle>
            {
                isAuth ? <UserInfo/> : <UserUnAuthorized/>
            }
        </Page>
    )
};
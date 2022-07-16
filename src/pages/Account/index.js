import React, { useContext } from "react";
import { Page } from "../../components/Page"
import { PageTitle, FooterFixed } from "../../globalStyles"
import { Button } from "../../components/Button";
import { UserContext } from "../../contexts/UserContext";

export const Account = () => {
    
    const {user, setUser} = useContext(UserContext);

    const UserInfo = () => (
        <div>
            <h3>{user.name}</h3>
            <h5>{user.identification}</h5>
            <h5>{user.phone}</h5>
            <p>{user.email}</p>
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
                user.isAuth ? <UserInfo/> : <UserUnAuthorized/>
            }
        </Page>
    )
};
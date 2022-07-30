import React, { useContext } from "react";
import { Page } from "../../components/Page"
import { PageTitle, FooterFixed } from "../../globalStyles"
import { Button } from "../../components/Button";
import { UserContext } from "../../contexts/UserContext";
import {removeToken} from "../../utils/TokenLS"
import { showAlert, SW_ICON } from "../../utils/SwAlert";
import { useNavigate } from "react-router-dom";

export const Account = () => {
    
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const closeUserSession = (data) => {
        try {
            removeToken();
            setUser({}); 
            showAlert("Hasta pronto", "Se ha cerrado la sesion de forma correcta", SW_ICON.SUCCESS, () => { navigate('/')});
        } catch (error) {
            showAlert("Error", "Error al cerrar la sesion", SW_ICON.ERROR);
          }
      };

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
                    onPress={ closeUserSession }
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
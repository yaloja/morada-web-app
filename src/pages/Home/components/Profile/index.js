import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { NameWrapper, ProfileInfoWrapper } from "./styles";

export const ProfileInfo = () => {
    const {user} = useContext(UserContext);
    
    return (
        <ProfileInfoWrapper>
            <img alt="foto de perfil" src="https://images.ctfassets.net/8lc7xdlkm4kt/5XZ6f7kcqu0cVgTnFoFnLt/52ac8951ab8edd991e28b383a6eac830/61M2.jpg"/>
            <NameWrapper>
                <p>Hola!</p>
                <p className = "name">{user.name}</p>
            </NameWrapper>
        </ProfileInfoWrapper>
    )
}
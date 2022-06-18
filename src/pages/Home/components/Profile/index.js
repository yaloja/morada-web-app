import React from "react";
import { NameWrapper, ProfileInfoWrapper } from "./styles";
export const ProfileInfo = () => (

    <ProfileInfoWrapper>
        <img alt="foto de perfil" src="https://images.ctfassets.net/8lc7xdlkm4kt/5XZ6f7kcqu0cVgTnFoFnLt/52ac8951ab8edd991e28b383a6eac830/61M2.jpg"/>
        <NameWrapper>
            <p>Hi,</p>
            <p className = "name">Yarleidy Lopera Jaramillo</p>
        </NameWrapper>
    </ProfileInfoWrapper>
)
import { NameWrapper, ProfileWrapper } from "./styles";
import { IoPerson }  from "react-icons/io5"

export const ProfileInfo = () => (

    <><ProfileWrapper>
        <IoPerson/>
    </ProfileWrapper>
    <NameWrapper>
        <p>Hi,</p>
        <p class="name">Nombre</p>
    </NameWrapper></>


)
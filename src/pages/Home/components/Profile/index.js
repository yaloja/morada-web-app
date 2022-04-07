import { NameWrapper, ProfileWrapper } from "./styles";
import { IoAccessibility }  from "react-icons/io5"

export const ProfileInfo = () => (

    <><ProfileWrapper>
        <IoAccessibility />
    </ProfileWrapper>
    <NameWrapper>
        <p>Hi,</p>
        <p class="name">Nombre</p>
    </NameWrapper></>


)
import { PropertyTypeButtonWrapper } from "./styles";
import { FaBuilding } from "react-icons/fa";


export const PropertyTypeButton = ({icon, label}) => (

    <PropertyTypeButtonWrapper>
        <FaBuilding/>
        <p>{label}</p>
    </PropertyTypeButtonWrapper>

)
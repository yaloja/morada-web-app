import { IconWrapper, PropertyTypeButtonWrapper } from "./styles";

export const PropertyTypeButton = ({icon:Icon, label}) => (

    <PropertyTypeButtonWrapper>
        <IconWrapper>
            <Icon/>
        </IconWrapper>
        <p>{label}</p>
    </PropertyTypeButtonWrapper>

)
import React from "react";
import { IconWrapper, PropertyTypeButtonWrapper } from "./styles";

export const PropertyTypeButton = ({id, icon:Icon, label, selected, onPress}) => (

    <PropertyTypeButtonWrapper selected={selected} onClick={ () => onPress(id)}>
        <IconWrapper selected={selected}>
            <Icon/>
        </IconWrapper>
        <p>{label}</p>
    </PropertyTypeButtonWrapper>

)
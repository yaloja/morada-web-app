import React from "react";
import { PropertyValueWrapper } from "./styles";

export const PropertyValue = ({propValue}) => (
    <PropertyValueWrapper>
        <p>{propValue}</p>
    </PropertyValueWrapper>
)
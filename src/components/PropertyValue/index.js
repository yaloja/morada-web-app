import React from "react";
import { getCurrencyFormat } from "../../utils/currencyFormat";
import { PropertyValueWrapper } from "./styles";

export const PropertyValue = ({propValue}) => (
    <PropertyValueWrapper>
        <p>{getCurrencyFormat(propValue)}</p>
    </PropertyValueWrapper>
)
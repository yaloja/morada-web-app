import React from "react";
import { getPropertyTypeLabel } from "../../utils/getDataConstants";
import { PropertyTypeLabelWrapper } from "./styles"

export const PropertyTypeLabel = ({typeId}) => (
    <PropertyTypeLabelWrapper>
        <p>
            {getPropertyTypeLabel(typeId)}
        </p>
    </PropertyTypeLabelWrapper>
)
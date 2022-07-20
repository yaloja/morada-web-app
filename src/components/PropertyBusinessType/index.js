import React from "react";
import {IoPricetag} from 'react-icons/io5'
import { getBusinessTypeLabel } from "../../utils/getDataConstants";
import { PropertyBusinessTypeWrapper } from './styles'

export const PropertyBusinessType = ({businessType}) => (
    <PropertyBusinessTypeWrapper>
        <IoPricetag></IoPricetag>
        <p>{getBusinessTypeLabel(businessType)}</p>
    </PropertyBusinessTypeWrapper>
)
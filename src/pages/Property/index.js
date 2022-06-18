import React from "react";
import { PropertyTypeLabel } from "../../components/PropertyTypeLabel"
import { PropertyBusinessType } from "../../components/PropertyBusinessType"
import { Subtitle } from "../../globalStyles";
import { PropertyValue } from "../../components/PropertyValue";
import { PropertyCardImageWrapper, PropertyCardInfoWrapper } from "../Home/components/PropertyCard/styles";
import { PropertyDescription } from "../../components/PropertyDescription";
import { Page } from "../../components/Page";

export const Property = () => (
    <Page>
        <PropertyCardImageWrapper>
            <img alt="imagen de la propiedad" src="https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl92ZW5kb2FycmllbmRvX2xvY2FsX2NjX2d1YXltYXJfMTU5MDAzNjA4NC03MjgxXzU1NTkuanBnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTc5LCJoZWlnaHQiOjc0MywiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19" />
        </PropertyCardImageWrapper>
        <PropertyCardInfoWrapper>
            <h3>Local en Bogota</h3>
            <Subtitle>Bogota, Cundinamarca</Subtitle>
            <PropertyTypeLabel typeId='Local'></PropertyTypeLabel>
            <PropertyBusinessType businessType='Venta'></PropertyBusinessType>
            <PropertyValue propValue='400.000'></PropertyValue>
            <PropertyDescription description='Local medianero ubicado en uno de los principales centros comerciales del sector, 200 m2 con excelentes acabados y bajo costo de administracion'></PropertyDescription>
        </PropertyCardInfoWrapper>
    </Page>
    
)
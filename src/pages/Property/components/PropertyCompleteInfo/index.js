import { PropertyTypeLabel } from "../../../../components/PropertyTypeLabel";
import { PropertyBusinessType } from "../../../../components/PropertyBusinessType"
import { Subtitle } from "../../../../globalStyles";
import { PropertyValue } from "../../../../components/PropertyValue";
import { PropertyDetailsWrapper } from "./styles";
import { PropertyCardImageWrapper } from "../../../Home/components/PropertyCard/styles";
import { PropertyCardInfoWrapper } from "../../../Home/components/PropertyCard/styles";
import { PropertyDescription } from "../../../../components/PropertyDescription";

export const PropertyCompleteInfo = ({photo, title, location, propertyType, businessType, value, description}) => (
       <PropertyDetailsWrapper>
            <PropertyCardImageWrapper>
                <img alt="property image" src="https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl92ZW5kb2FycmllbmRvX2xvY2FsX2NjX2d1YXltYXJfMTU5MDAzNjA4NC03MjgxXzU1NTkuanBnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTc5LCJoZWlnaHQiOjc0MywiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19"></img>
            </PropertyCardImageWrapper>
            <PropertyCardInfoWrapper>
                <h3>Local en Bogota</h3>
                <Subtitle>Bogota, Cundinamarca</Subtitle>
                <PropertyTypeLabel typeId='Local'></PropertyTypeLabel>
                <PropertyBusinessType businessType='Venta'></PropertyBusinessType>
                <PropertyValue propValue='400.000'></PropertyValue>
                <PropertyDescription description='Local medianero ubicado en uno de los principales centros comerciales del sector, 200 m2 con excelentes acabados y bajo costo de administracion'></PropertyDescription>
            </PropertyCardInfoWrapper>
        </PropertyDetailsWrapper>
)
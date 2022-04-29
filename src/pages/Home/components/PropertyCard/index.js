import { PropertyTypeLabel } from "../../../../components/PropertyTypeLabel";
import { PropertyBusinessType } from "../../../../components/PropertyBusinessType"
import { Subtitle } from "../../../../globalStyles";
import { PropertyCardWrapper, PropertyCardImageWrapper, PropertyCardInfoWrapper } from "./styles";
import { PropertyValue } from "../../../../components/PropertyValue";
import { Link } from "react-router-dom";

export const PropertyCard = ({photo, title, location, propertyType, businessType, value}) => (
    
        <PropertyCardWrapper>
            <PropertyCardImageWrapper>
            <img alt="property image" src="https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl92ZW5kb2FycmllbmRvX2xvY2FsX2NjX2d1YXltYXJfMTU5MDAzNjA4NC03MjgxXzU1NTkuanBnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTc5LCJoZWlnaHQiOjc0MywiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19"></img>
            </PropertyCardImageWrapper>
            <PropertyCardInfoWrapper>
            <Link to='/Property'><h3>Local en Bogota</h3></Link>
                <Subtitle>
                    Bogota, Cundinamarca
                </Subtitle>
                <PropertyTypeLabel typeId='Local'></PropertyTypeLabel>
                <PropertyBusinessType businessType='Venta'></PropertyBusinessType>
                <PropertyValue propValue='400.000'></PropertyValue>
            </PropertyCardInfoWrapper>
        </PropertyCardWrapper>
    
)
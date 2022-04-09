import { PropertyTypeLabel } from "../../../../components/PropertyTypeLabel";
import { PropertyBusinessType } from "../../../../components/PropertyBusinessType"
import { Subtitle } from "../../../../globalStyles";
import { PropertyCardWrapper, PropertyCardImageWrapper, PropertyCardInfoWrapper } from "./styles";

export const PropertyCard = () => (
    <PropertyCardWrapper>
        <PropertyCardImageWrapper>
            <img alt="property image" src="https://images.ctfassets.net/8lc7xdlkm4kt/5XZ6f7kcqu0cVgTnFoFnLt/52ac8951ab8edd991e28b383a6eac830/61M2.jpg"/>
        </PropertyCardImageWrapper>
        <PropertyCardInfoWrapper>
            <h3>Apartamento en Laureles</h3>
            <Subtitle>
                Medellin, Antioquia
            </Subtitle>
            <PropertyTypeLabel></PropertyTypeLabel>
            <PropertyBusinessType></PropertyBusinessType>
            <p>$400.000</p>
        </PropertyCardInfoWrapper>
    </PropertyCardWrapper>
)
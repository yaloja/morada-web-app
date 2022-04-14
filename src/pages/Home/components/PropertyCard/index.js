import { PropertyTypeLabel } from "../../../../components/PropertyTypeLabel";
import { PropertyBusinessType } from "../../../../components/PropertyBusinessType"
import { Subtitle } from "../../../../globalStyles";
import { PropertyCardWrapper, PropertyCardImageWrapper, PropertyCardInfoWrapper } from "./styles";
import { PropertyValue } from "../../../../components/PropertyValue";

export const PropertyCard = ({photo, title, location, propertyType, businessType, value}) => (
    <PropertyCardWrapper>
        <PropertyCardImageWrapper>
            {photo}
        </PropertyCardImageWrapper>
        <PropertyCardInfoWrapper>
            <h3>{title}</h3>
            <Subtitle>
                {location}
            </Subtitle>
            <PropertyTypeLabel typeId={propertyType}></PropertyTypeLabel>
            <PropertyBusinessType businessType={businessType}></PropertyBusinessType>
            <PropertyValue propValue={value}></PropertyValue>
        </PropertyCardInfoWrapper>
    </PropertyCardWrapper>
)
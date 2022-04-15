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
                <PropertyDescription description={description}></PropertyDescription>
            </PropertyCardInfoWrapper>
        </PropertyDetailsWrapper>
)
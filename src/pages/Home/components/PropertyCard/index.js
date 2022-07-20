import React from "react";
import { PropertyTypeLabel } from "../../../../components/PropertyTypeLabel";
import { PropertyBusinessType } from "../../../../components/PropertyBusinessType"
import { Subtitle } from "../../../../globalStyles";
import { PropertyCardWrapper, PropertyCardImageWrapper, PropertyCardInfoWrapper } from "./styles";
import { PropertyValue } from "../../../../components/PropertyValue";
import { Link } from "react-router-dom";
import { getStaticImage } from "../../../../utils/StaticImage";
import { getCityZoneLabel } from "../../../../utils/getDataConstants";

export const PropertyCard = (props) => (
    
        <PropertyCardWrapper to={`/property/${props._id}`}>
            <PropertyCardImageWrapper>
            <img alt="imagen de la propiedad" src={getStaticImage(props.mainImage)}/>
            </PropertyCardImageWrapper>
            <PropertyCardInfoWrapper>
                <h3>{props.title}</h3>
                <Subtitle>
                    {getCityZoneLabel(props.city, props.zone)}
                </Subtitle>
                <PropertyTypeLabel typeId={props.propertyType}></PropertyTypeLabel>
                <PropertyBusinessType businessType={props.businessType}></PropertyBusinessType>
                <PropertyValue propValue={props.value}></PropertyValue>
            </PropertyCardInfoWrapper>
        </PropertyCardWrapper>
    
)
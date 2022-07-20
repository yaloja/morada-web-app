import React from "react";
import { useState, useEffect } from "react"
import { PropertyTypeLabel } from "../../components/PropertyTypeLabel"
import { PropertyBusinessType } from "../../components/PropertyBusinessType"
import { Subtitle } from "../../globalStyles";
import { PropertyValue } from "../../components/PropertyValue";
import { PropertyCardImageWrapper, PropertyCardInfoWrapper } from "../Home/components/PropertyCard/styles";
import { PropertyDescription } from "../../components/PropertyDescription";
import { Page } from "../../components/Page";
import { useParams } from "react-router-dom";
import { HTTP_VERBS, requestHttp } from "../../utils/HttpRequest"
import { getStaticImage } from "../../utils/StaticImage";
import { getCityZoneLabel } from "../../utils/getDataConstants";



export const Property = () => {

    const { idProperty } = useParams();

    const [property, setProperty] = useState([]);
  
    useEffect(() => {
        getPropertyDetail();
    }, [idProperty])
  
    const getPropertyDetail = async () => {
      try {
          const response = await requestHttp({
              method: HTTP_VERBS.GET,
              endpoint: `/properties/${idProperty}`
            });
            console.log('Propiedad cargada', response.data);
            property = setProperty(response.data.property);
      } catch(error) {
          console.log('error', error);
      }
    }

    return (
        <Page>
            <PropertyCardImageWrapper>
                <img alt="imagen de la propiedad" src={getStaticImage(property.mainImage)} />
            </PropertyCardImageWrapper>
            <PropertyCardInfoWrapper>
                <h3>{property.title}</h3>
                <Subtitle>{getCityZoneLabel(property.city, property.zone)}</Subtitle>
                <PropertyTypeLabel typeId={property.propertyType}></PropertyTypeLabel>
                <PropertyBusinessType businessType={property.businessType}></PropertyBusinessType>
                <PropertyValue propValue={property.value}></PropertyValue>
                <PropertyDescription description={property.description}></PropertyDescription>
            </PropertyCardInfoWrapper>
        </Page>
    );
    
    }
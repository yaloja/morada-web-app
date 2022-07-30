import React, { useContext } from "react";
import { useState, useEffect } from "react"
import { PropertyTypeLabel } from "../../components/PropertyTypeLabel"
import { PropertyBusinessType } from "../../components/PropertyBusinessType"
import { Subtitle } from "../../globalStyles";
import { PropertyValue } from "../../components/PropertyValue";
import {
    PropertyCardImageWrapper,
    PropertyCardInfoWrapper,
    PropertyCardTitleWrapper,
    PropertyCardDetailWrapper
} from "../Home/components/PropertyCard/styles";
import { PropertyDescription } from "../../components/PropertyDescription";
import { Page } from "../../components/Page";
import { useParams } from "react-router-dom";
import { HTTP_VERBS, requestHttp } from "../../utils/HttpRequest"
import { getStaticImage } from "../../utils/StaticImage";
import { Button } from "../../components/Button";
import { UserContext } from "../../contexts/UserContext";
import { ButtonIcon } from "../../components/ButtonIcon";
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5'

export const Property = () => {

    const { user } = useContext(UserContext)
    const { idProperty } = useParams();

    const [property, setProperty] = useState(null);
    const [favorite, setFavorite] = useState(null);

    useEffect(() => {
        getPropertyDetail();
        getFavoriteInfo();
    }, [idProperty])

    const getPropertyDetail = async () => {
        try {
            const response = await requestHttp({
                method: HTTP_VERBS.GET,
                endpoint: `/properties/${idProperty}`
            });
            const propertyData = response.data.property;
            setProperty(propertyData);
        } catch (error) {
            console.log('error', error);
        }
    }

    const getFavoriteInfo = async () => {
        try {
            const response = await requestHttp({
                endpoint: '/favorites/',
                body: {userId: user.userId, propertyId: idProperty}
            });
            const favoriteData = response.data.favorite;
            setFavorite(favoriteData);
        } catch (error) {
            console.log('error', error);
        }
    }

    const handleFavorites = () => {
        try {

        } catch (error) {

        }
    }

    if (property != null && favorite != null) {
        return (
            <Page>
                <PropertyCardDetailWrapper>
                    <PropertyCardImageWrapper>
                        <img alt="imagen de la propiedad" src={getStaticImage(property.mainImage)} />
                    </PropertyCardImageWrapper>
                    <PropertyCardInfoWrapper>
                        <PropertyCardTitleWrapper>
                            <h3>{property.title}</h3>
                            <ButtonIcon
                                icon={favorite.length>=1 ? IoHeartSharp : IoHeartOutline}
                                onPress={handleFavorites}
                                disabled={!user.isAuth}
                            />
                        </PropertyCardTitleWrapper>
                        <Subtitle>{property.city.name}, {property.zone.name}</Subtitle>
                        <PropertyTypeLabel typeId={property.propertyType}></PropertyTypeLabel>
                        <PropertyBusinessType businessType={property.businessType}></PropertyBusinessType>
                        <PropertyValue propValue={property.value}></PropertyValue>
                        <PropertyDescription description={property.description}></PropertyDescription>
                        <br />
                        <Button
                            disabled={!user.isAuth}
                            type="submit"
                            onPress={() => { }}
                            label="Solicitar esta propiedad"
                        />
                    </PropertyCardInfoWrapper>
                </PropertyCardDetailWrapper>
            </Page>
        );
    } else {
        return (
            <p>Cargando propiedad...</p>
        )
    }


}
import { BUSINESS_TYPE, CITIES, PROPERTY_TYPE } from "../constants/data"


export const getPropertyTypeLabel = (id) => {
    return PROPERTY_TYPE[id] || "No definido";
}

export const getBusinessTypeLabel = (id) => {
    return BUSINESS_TYPE[id] || "No definido";
}

export const getCityZoneLabel = (idCity, idZone) => {
    const city = CITIES[idCity] || {city: 'No definido', zones:{} };
    const zone = city.zones[idZone] || "No definido";
    return `${city.city}, ${zone}`;
}
import React from "react";
import { useState, useEffect } from "react"
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { ProfileInfo } from "./components/Profile";
import { WelcomeMessage } from "./components/WelcomeMessage";
import { PropertyTypesContainer } from "./styles";
import { IoBusiness, IoHome, IoLocation, IoPrism, IoPower} from "react-icons/io5"
import { PropertyCard } from "./components/PropertyCard";
import { Page } from "../../components/Page";
import { PageTitle } from "../../globalStyles";
import { HTTP_VERBS, requestHttp } from "../../utils/HttpRequest"

const ALL_PROPERTY_TYPES = 0;
const PropertyTypes = [
  { id: 1, icon: IoBusiness, label: 'Apartamento'},
  { id: 2, icon: IoHome, label: 'Casa'},
  { id: 3, icon: IoLocation, label: 'Lote'},
  { id: 4,icon: IoPrism, label: 'Finca'},
  { id: 5, icon: IoPower, label: 'Local'},
]

export const Home = () => {
  
  const [properties, setProperties] = useState([]);
  const [propertyTypeSelected, setPropertyTypeSelected] = useState(ALL_PROPERTY_TYPES);

  const PropertyTypeHandler = (id) => {
    setPropertyTypeSelected(propertyTypeSelected===id ? ALL_PROPERTY_TYPES : id)
  }

  useEffect(() => {
    requestProperties();
  }, [propertyTypeSelected])

  const requestProperties = async () => {
    try {
        const filters = {};
        if(propertyTypeSelected !== ALL_PROPERTY_TYPES) {
          filters['propertyType'] = propertyTypeSelected;
        }
        
        const response = await requestHttp({
            method: HTTP_VERBS.GET,
            endpoint: '/properties',
            params: filters
          });
          setProperties(response.data.properties);
    } catch(error) {
        console.log('error', error);
    }
  }

    return(
      <Page>
          <PageTitle>Home - morada</PageTitle>
          <ProfileInfo></ProfileInfo>
                    
          <WelcomeMessage></WelcomeMessage>
          
          <PropertyTypesContainer>
          {
              PropertyTypes.map((item, key) => (
                  <PropertyTypeButton 
                  selected={propertyTypeSelected===item.id}
                  id = {item.id} 
                  icon={item.icon} 
                  label={item.label}
                  onPress={PropertyTypeHandler}
                  key={key}
                  />))
          }
          </PropertyTypesContainer>
{/* recorrer el array para cargar las propiedades */}
          <>
            {
              properties.map((property,key) => (
                <PropertyCard 
                  {...property}
                  key={property._Id}
                />))
            }
          </>
          
      </Page>
    )
}
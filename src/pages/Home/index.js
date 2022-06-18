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

const PropertyTypes = [
    { id: 1, icon: IoBusiness, label: 'Apartamento'},
    { id: 2, icon: IoHome, label: 'Casa'},
    { id: 3, icon: IoLocation, label: 'Lote'},
    { id: 4,icon: IoPrism, label: 'Finca'},
    { id: 5, icon: IoPower, label: 'Local'},
]

export const Home = () => {

  const [propertyTypeSelected, setPropertyTypeSelected] = useState(0)

  const PropertyTypeHandler = (id) => {
    setPropertyTypeSelected(id);
  }

  useEffect(() => {
    //Acciones a ejecutar
    console.log('se modifico el estado de propertyTypeSelected '+propertyTypeSelected);
  }, [propertyTypeSelected])

    return(
      <Page>
          <PageTitle>Home - morada</PageTitle>
          <ProfileInfo></ProfileInfo>
                    
          <WelcomeMessage></WelcomeMessage>
          
          <PropertyTypesContainer>
          {
              PropertyTypes.map(item => 
                  <PropertyTypeButton 
                  selected={propertyTypeSelected===item.id}
                  id = {item.id} 
                  icon={item.icon} 
                  label={item.label}
                  onPress={PropertyTypeHandler}
                  />)
          }
          </PropertyTypesContainer>

          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          <PropertyCard/>
          
      </Page>
    )
}
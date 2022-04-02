import { Fragment } from "react";
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { UserInfoContainer } from "./components/UserInfo";
import { PropertyTypesContainer } from "./styles";

const PropertyTypes = [
    { icon: 'icono-apartamento', label: 'Apartamento'},
    { icon: 'icono-casa', label: 'Casa'},
    { icon: 'icono-lote', label: 'Lote'},
    { icon: 'icono-finca', label: 'Finca'},
    { icon: 'icono-local', label: 'Local'},
]

export const Home = () => (
    <Fragment>
        <h1>Home - morada</h1>
        <UserInfoContainer>
        </UserInfoContainer>
        <PropertyTypesContainer>
        {
            PropertyTypes.map(item => 
                <PropertyTypeButton icon={item.icon} label={item.label}/>)
        }
        </PropertyTypesContainer>
    </Fragment>
)
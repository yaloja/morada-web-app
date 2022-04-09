import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { ProfileInfo } from "./components/Profile";
import { WelcomeMessage } from "./components/WelcomeMessage";
import { PropertyTypesContainer, WelcomeMessageContainer } from "./styles";
import { UserContainer } from "./styles";
import { IoBusiness, IoHome, IoLocation, IoPrism, IoPower} from "react-icons/io5"
import { PropertyCard } from "./components/PropertyCard";
import { Page } from "../../components/Page";

const PropertyTypes = [
    { icon: IoBusiness, label: 'Apartamento'},
    { icon: IoHome, label: 'Casa'},
    { icon: IoLocation, label: 'Lote'},
    { icon: IoPrism, label: 'Finca'},
    { icon: IoPower, label: 'Local'},
]

export const Home = () => (
    <Page>
        <h1>Home - morada</h1>
        <UserContainer>
            <ProfileInfo>
            </ProfileInfo>
        </UserContainer>
                  
        <WelcomeMessageContainer>
            <WelcomeMessage/>
        </WelcomeMessageContainer>
        
        <PropertyTypesContainer>
        {
            PropertyTypes.map(item => 
                <PropertyTypeButton icon={item.icon} label={item.label}/>)
        }
        </PropertyTypesContainer>

        <PropertyCard>

        </PropertyCard>
    </Page>
)
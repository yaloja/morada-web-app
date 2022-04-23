import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { ProfileInfo } from "./components/Profile";
import { WelcomeMessage } from "./components/WelcomeMessage";
import { PropertyTypesContainer, PropertyCardsContainer } from "./styles";
import { IoBusiness, IoHome, IoLocation, IoPrism, IoPower} from "react-icons/io5"
import { PropertyCard } from "./components/PropertyCard";
import { Page } from "../../components/Page";
import { Menu } from "../../components/Menu";
import { PageTitle } from "../../globalStyles";

const PropertyTypes = [
    { icon: IoBusiness, label: 'Apartamento'},
    { icon: IoHome, label: 'Casa'},
    { icon: IoLocation, label: 'Lote'},
    { icon: IoPrism, label: 'Finca'},
    { icon: IoPower, label: 'Local'},
]

const Properties = [
    { photo: <img alt="property image" src="https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl92ZW5kb2FycmllbmRvX2xvY2FsX2NjX2d1YXltYXJfMTU5MDAzNjA4NC03MjgxXzU1NTkuanBnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTc5LCJoZWlnaHQiOjc0MywiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19"></img>,
      title: 'Local en Bogota',
      location: 'Bogota, Cundinamarca',
      propertyType: 'Local',
      businesstype: 'Arriendo',
      value: '$ 500'},
    { photo: <img alt="property image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRREHbzRXH9QivsYGyR1-L7NIBK8TCMDWy_iA&usqp=CAU"></img>,
      title: 'Apartamento en Medellin',
      location: 'Medellin, Antioquia',
      propertyType: 'Apartamento',
      businesstype: 'Venta',
      value: '$ 400.000'},
    { photo: <img alt="property image" src="https://apollo-virginia.akamaized.net/v1/files/a9lc3g1qtsx93-CO/image;s=850x0"></img>,
      title: 'Lote en Cali',
      location: 'Cali, Valle',
      propertyType: 'Lote',
      businesstype: 'Venta',
      value: '$ 100.000'},
    { photo: <img alt="property image" src="https://http2.mlstatic.com/D_NQ_NP_871386-MCO47965447117_102021-W.jpg"></img>,
      title: 'Amplia casa en Medellin',
      location: 'Medellin, Antioquia',
      propertyType: 'Casa',
      businesstype: 'Arriendo',
      value: '$ 100'},
]

export const Home = () => (
    <Page>
        <PageTitle>Home - morada</PageTitle>
        <ProfileInfo></ProfileInfo>
                  
        <WelcomeMessage></WelcomeMessage>
        
        <PropertyTypesContainer>
        {
            PropertyTypes.map(item => 
                <PropertyTypeButton icon={item.icon} label={item.label}/>)
        }
        </PropertyTypesContainer>

        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
        
    </Page>
)
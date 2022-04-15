import { Page } from "../../components/Page";
import { PropertyContainer } from "./styles";
import { PropertyCompleteInfo } from "./components/PropertyCompleteInfo";

const Properties = [
    { photo: <img alt="property image" src="https://image.wasi.co/eyJidWNrZXQiOiJzdGF0aWN3Iiwia2V5IjoiaW5tdWVibGVzXC9ncl92ZW5kb2FycmllbmRvX2xvY2FsX2NjX2d1YXltYXJfMTU5MDAzNjA4NC03MjgxXzU1NTkuanBnIiwiZWRpdHMiOnsibm9ybWFsaXNlIjp0cnVlLCJyb3RhdGUiOjAsInJlc2l6ZSI6eyJ3aWR0aCI6OTc5LCJoZWlnaHQiOjc0MywiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19"></img>,
      title: 'Local en Bogota',
      location: 'Bogota, Cundinamarca',
      propertyType: 'Local',
      businesstype: 'Arriendo',
      value: '$ 500',
      description: 'Local medianero ubicado en uno de los principales centros comerciales del sector, 200 m2 con excelentes acabados y bajo costo de administracion'},
    { photo: <img alt="property image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRREHbzRXH9QivsYGyR1-L7NIBK8TCMDWy_iA&usqp=CAU"></img>,
      title: 'Apartamento en Medellin',
      location: 'Medellin, Antioquia',
      propertyType: 'Apartamento',
      businesstype: 'Venta',
      value: '$ 400.000',
      description: 'Local medianero ubicado en uno de los principales centros comerciales del sector, 200 m2 con excelentes acabados y bajo costo de administracion'},
    { photo: <img alt="property image" src="https://apollo-virginia.akamaized.net/v1/files/a9lc3g1qtsx93-CO/image;s=850x0"></img>,
      title: 'Lote en Cali',
      location: 'Cali, Valle',
      propertyType: 'Lote',
      businesstype: 'Venta',
      value: '$ 100.000',
      description: 'Local medianero ubicado en uno de los principales centros comerciales del sector, 200 m2 con excelentes acabados y bajo costo de administracion'},
    { photo: <img alt="property image" src="https://http2.mlstatic.com/D_NQ_NP_871386-MCO47965447117_102021-W.jpg"></img>,
      title: 'Amplia casa en Medellin',
      location: 'Medellin, Antioquia',
      propertyType: 'Casa',
      businesstype: 'Arriendo',
      value: '$ 100',
      description: 'Local medianero ubicado en uno de los principales centros comerciales del sector, 200 m2 con excelentes acabados y bajo costo de administracion'},
]

export const Property = () => (
    <Page>
       <PropertyContainer>
       {
            Properties.map(item =>
                <PropertyCompleteInfo photo={item.photo} title={item.title} location={item.location} 
                propertyType={item.propertyType} businessType={item.businesstype} value={item.value} description={item.description}/>)
        }
       </PropertyContainer>
        
    </Page>
    
)
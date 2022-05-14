
import { Page } from "../../components/Page"
import { PageTitle } from "../../globalStyles"
import { Button } from "../../components/Button"
import { FormControl, FormControlInput} from "../../globalStyles"

export const AddProperty = () => {
    
    return (
        <Page>
            <PageTitle>Agregar propiedad</PageTitle>
            <br/>
            <form>
                <FormControl>
                    <FormControlInput>
                        <label>Tipo Propiedad</label>
                        <select name="combo">
                            <option value="1" selected>Apartamento</option>
                            <option value="2">Casa</option> 
                            <option value="3">Lote</option>
                            <option value="4">Finca</option>
                            <option value="5">Local</option>
                        </select>
                    </FormControlInput>
                </FormControl>
                
                <FormControl>
                    <FormControlInput>
                        <label>Nombre inmueble</label>
                        <input type="text"/>
                    </FormControlInput>
                </FormControl>
                
                <FormControl>
                    <FormControlInput>
                        <label>Ciudad y Departamento</label>
                        <input type="text"/>
                    </FormControlInput>
                </FormControl>
                
                <FormControl>
                    <FormControlInput>
                        <label>Tipo negocio</label>
                        <select name="combo">
                            <option value="1" selected>Arriendo</option>
                            <option value="2">Venta</option> 
                        </select>
                    </FormControlInput>
                </FormControl>

                <FormControl>
                    <FormControlInput>
                        <label>Valor</label>
                        <input type="number"/>
                    </FormControlInput>
                </FormControl>
                
                <FormControl>
                    <FormControlInput>
                        <label>Descripción</label>
                        <textarea type="text"/>
                    </FormControlInput>
                </FormControl>
                
                <br/> 
                <Button label="Agregar Inmueble" onPress={ () => alert('Propiedad registrada')}></Button>
            </form>
            
        </Page>
    );
}
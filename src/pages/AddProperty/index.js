
import { useState } from "react"
import { Page } from "../../components/Page"
import { PageTitle } from "../../globalStyles"
import { Button } from "../../components/Button"
import { FormControl, FormControlInput, FormControlAction} from "../../globalStyles"
import {IoEyeOff, IoEye } from 'react-icons/io5'
import { ButtonIcon } from "../../components/ButtonIcon"

export const AddProperty = () => {
    
    const [visiblePass, setVisiblePass] = useState(false)

    const tooglePasswordVisible = () => {
        setVisiblePass(!visiblePass);
    }
    
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
                
                <FormControl>
                    <FormControlInput>
                            <label>Contraseña</label>
                            <input type={visiblePass ? "text" : "password"}/>
                        </FormControlInput>
                        <FormControlAction>
                            <ButtonIcon icon={visiblePass ? IoEyeOff : IoEye} onPress={tooglePasswordVisible}></ButtonIcon>
                    </FormControlAction>
                </FormControl>
            
                <br/> 
                <Button label="Agregar Inmueble" onPress={ () => alert('Usuario registrado')}></Button>
            </form>
            
        </Page>
    );
}
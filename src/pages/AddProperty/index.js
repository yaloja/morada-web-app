import React from "react";
import { Page } from "../../components/Page"
import { PageTitle } from "../../globalStyles"
import { Button } from "../../components/Button"
import { FormControl, FormControlInput, FormControlRadio, PageSubTitle } from "../../globalStyles"
import { POCUploadImage } from "../POCUploadImage"

export const AddProperty = () => {

    return (
        <Page>
            <PageTitle>Agregar propiedad</PageTitle>
            <FormControlInput>
                <POCUploadImage></POCUploadImage>
            </FormControlInput>
            <br />
            <br />
            <form>
                <PageSubTitle>Registrar datos de la propiedad</PageSubTitle>
                <FormControl>
                    <FormControlInput>
                        <label>Tipo Propiedad</label>
                        <select name="combo">
                            <option value="0" selected></option>
                            <option value="1">Apartamento</option>
                            <option value="2">Casa</option>
                            <option value="3">Lote</option>
                            <option value="4">Finca</option>
                            <option value="5">Local</option>
                        </select>
                    </FormControlInput>
                </FormControl>

                <FormControl>
                    <FormControlRadio>
                        <input type="radio" name="businessType" value="1" required /><label for="Renta">Renta</label>
                        <input type="radio" name="businessType" value="2" required /><label for="Venta">Venta</label>
                    </FormControlRadio>
                </FormControl>

                <FormControl>
                    <FormControlInput>
                        <label>Título inmueble</label>
                        <input type="text" />
                    </FormControlInput>
                </FormControl>

                <FormControl>
                    <FormControlInput>
                        <label>Ciudad</label>
                        <input type="text" />
                    </FormControlInput>
                </FormControl>

                <FormControl>
                    <FormControlInput>
                        <label>Zona</label>
                        <input type="text" />
                    </FormControlInput>
                </FormControl>

                <FormControl>
                    <FormControlInput>
                        <label>Valor</label>
                        <input type="number" />
                    </FormControlInput>
                </FormControl>

                <FormControl>
                    <FormControlInput>
                        <label>Descripción general</label>
                        <textarea type="text" />
                    </FormControlInput>
                </FormControl>

                <FormControl>
                    <FormControlInput>
                        <label>Detalles adicionales</label>
                        <textarea type="text" />
                    </FormControlInput>
                </FormControl>

                <br />
                <Button label="Agregar Inmueble" onPress={() => alert('Propiedad registrada')}></Button>
            </form>

        </Page>
    );
}
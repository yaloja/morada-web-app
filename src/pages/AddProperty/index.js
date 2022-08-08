import React, { useState, useEffect } from "react";
import { Page } from "../../components/Page"
import { FormControlAction, PageTitle, FormControl, FormControlInput, FormControlRadio, PageSubTitle } from "../../globalStyles"
import { Button } from "../../components/Button"
import { HTTP_VERBS, CONTENT_TYPES, requestHttp } from "../../utils/HttpRequest";
import { showAlert, SW_ICON } from "../../utils/SwAlert";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import { ButtonIcon } from "../../components/ButtonIcon";

export const AddProperty = () => {

    const [file, setFile] = useState(null);

    const [mainImage, setMainImage] = useState(null);

    const [cities, setCities] = useState(null);

    const [zones, setZones] = useState([]);

    const navigate = useNavigate();

    const fileSeletedHandler = (event) => {
        const fileSelected = event.target.files[0];
        setFile(fileSelected);
    };

    const uploadFileHandler = () => {
        if (file) {
            requestUploadFile(file);
        } else {
            showAlert("Error", "Debes seleccionar un archivo para cargar", SW_ICON.ERROR);
        }
    }

    const requestUploadFile = async (file) => {
        try {
            const formData = new FormData();
            formData.append("propertyImage", file);
            const response = await requestHttp({
                endpoint: '/properties/upload',
                contentType: CONTENT_TYPES.MULTIPART_FORM_DATA,
                body: formData
            });
            showAlert("Archivo cargado", "El archivo fue cargado con exito", SW_ICON.SUCCESS);
            console.log('response', response);
            setMainImage(response.data.fileName);
            console.log('mainImage', response.data.fileName);
        } catch (error) {
            console.log('error', error);
        }
    }

    useEffect(() => {
        requestCities();
    }, [])

    const requestCities = async () => {
        try {
            const response = await requestHttp({
                method: HTTP_VERBS.GET,
                endpoint: '/cities',
            });
            setCities(response.data.cities);
            console.log('cities', response.data.cities);
        } catch (error) {
            console.log('error', error);
        }
    }

    const requestZones = async (cityId) => {
        try {
            const response = await requestHttp({
                method: HTTP_VERBS.GET,
                endpoint: `/zones/cityZones/${cityId}`
            });
            setZones(response.data.zones);
            console.log('zones', response.data.zones);
        } catch (error) {
            console.log('error', error);
        }
    }

    const {
        register,
        setValue,
        formState: { errors, isValid },
        handleSubmit
    } = useForm({ mode: "onChange" });

    const onChangeChargeZones = (data) => {

        console.log(data.target.value);
        requestZones(data.target.value);
    }

    const onSubmitAddProperty = (data) => {
        createPropertyRequest(data);
        console.log("form data", data);
        console.log("image", mainImage);
    };

    const toogleAddCity = () => {
        navigate('/add-city');
    };
    
    const toogleAddZone = () => {
        console.log("Add Zone")
        navigate('/add-zone');
    };

    const createPropertyRequest = async (data) => {
        try {
            const response = await requestHttp({
                endpoint: "/properties",
                body: data,
            });
            console.log(response);
            showAlert(
                "Registro exitoso",
                "Se ha agregado la nueva propiedad de foma exitosa",
                SW_ICON.SUCCESS,
                () => { navigate('/') }
            );
        } catch (error) {
            console.log("error", error);
            showAlert("Error", "Error en los datos de registro", SW_ICON.ERROR);
        }
    };

    if (cities != null) {
        return (
            <Page>
                <PageTitle>Agregar propiedad</PageTitle>
                <FormControlInput>
                    <PageSubTitle>Cargar imagen</PageSubTitle>
                    <input
                        type="file"
                        accept="image/png, image?jpeg"
                        onChange={fileSeletedHandler}
                    />
                    <br></br>
                    <br></br>
                    <Button
                        type="button"
                        label="Cargar imagen"
                        onPress={uploadFileHandler} />
                </FormControlInput>
                <br />
                <br />
                <form onSubmit={handleSubmit(onSubmitAddProperty)}>
                    <PageSubTitle>Registrar datos de la propiedad</PageSubTitle>
                    <FormControl>
                        <FormControlInput>
                            <label>Tipo Propiedad</label>
                            <select name="combo" {...register("propertyType", { required: true })}>
                                <option value="1" defaultValue >Apartamento</option>
                                <option value="2">Casa</option>
                                <option value="3">Lote</option>
                                <option value="4">Finca</option>
                                <option value="5">Local</option>
                            </select>
                        </FormControlInput>
                    </FormControl>

                    <FormControl>
                        <FormControlRadio>
                            <input type="radio" name="businessType" value="2" required {...register("businessType", { required: true })} /><label for="Renta">Renta</label>
                            <input type="radio" name="businessType" value="1" required {...register("businessType", { required: true })} /><label for="Venta">Venta</label>
                            {errors.businessType === "required" && (
                                <span>El campo Tipo negocio es requerido</span>
                            )}
                        </FormControlRadio>
                    </FormControl>

                    <FormControl>
                        <FormControlInput>
                            <label>Título inmueble</label>
                            <input name="title" type="text" {...register("title", { required: true, pattern: /[a-zA-Z\t]+|(^$)/, minLength: 3, maxLength: 100 })} />
                            {errors.title === "required" && (
                                <span>El campo Título es requerido</span>
                            )}
                        </FormControlInput>
                    </FormControl>

                    <FormControl>
                        <FormControlInput>
                            <label>Ciudad</label>
                            <select id="city" name="city" {...register("city")} onChange={onChangeChargeZones}>
                                <option value="" defaultValue>Seleccionar ciudad...</option>
                                {
                                    cities.map((item, key) => (
                                        <option value={item._id}> {item.name} </option>))
                                }
                            </select>
                        </FormControlInput>
                        <FormControlAction>
                            <ButtonIcon
                                icon={IoAdd}
                                onPress={toogleAddCity}
                            />
                        </FormControlAction>
                    </FormControl>

                    <FormControl>
                        <FormControlInput>
                            <label>Zona</label>
                            <select id="zone" name="zone" {...register("zone")} onBlur={() => { }}>
                                <option value="" defaultValue>Seleccionar zona...</option>
                                {
                                    zones.map((item, key) => (
                                        <option value={item._id}> {item.name} </option>))
                                }
                            </select>
                        </FormControlInput>
                        <FormControlAction>
                            <ButtonIcon
                                icon={IoAdd}
                                onPress={toogleAddZone}
                            />
                        </FormControlAction>
                    </FormControl>

                    <FormControl>
                        <FormControlInput>
                            <label>Valor</label>
                            <input type="number"
                                {...register("value", { required: true, pattern: /^-?\d+(,\d{3})*(\.\d{1,2})?$/, minLength: 5, maxLength: 15 })} />
                        </FormControlInput>
                    </FormControl>

                    <FormControl>
                        <FormControlInput>
                            <label>Descripción general</label>
                            <textarea type="text" {...register("shortDescription", { required: true, pattern: /[a-zA-Z\t]+|(^$)/, minLength: 3, maxLength: 200 })} />
                        </FormControlInput>
                    </FormControl>

                    <FormControl>
                        <FormControlInput>
                            <label>Detalles adicionales</label>
                            <textarea type="text" {...register("description", { required: true, pattern: /[a-zA-Z\t]+|(^$)/, minLength: 3, maxLength: 1000 })} />
                        </FormControlInput>
                    </FormControl>
                    <br />
                    <Button
                        disabled={!mainImage}
                        type="submit"
                        onPress={() => { }}
                        onClick={setValue('mainImage', mainImage)}
                        label="Agregar inmueble"
                    />
                </form>

            </Page>
        );
    } else {
        return (
            <p>Cargando propiedad...</p>
        )
    }
}
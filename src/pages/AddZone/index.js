import React from "react";
import { useState, useEffect } from "react"
import { Page } from "../../components/Page"
import { PageTitle } from "../../globalStyles"
import { Button } from "../../components/Button"
import { FormControl, FormControlInput, FormControlAction } from "../../globalStyles"
import { Link } from "react-router-dom"
import { HTTP_VERBS, requestHttp } from "../../utils/HttpRequest";
import { useForm } from "react-hook-form";
import { showAlert, SW_ICON } from "../../utils/SwAlert";
import { useNavigate } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import { ButtonIcon } from "../../components/ButtonIcon";

export const AddZone = () => {

    const [cities, setCities] = useState(null);

    useEffect(() => {
        requestCities();
    }, [])

    const toogleAddCity = () => {
        navigate('/add-city');
    };

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

    const navigate = useNavigate();

    const {
        register,
        formState: { errors, isValid },
        handleSubmit
    } = useForm({ mode: "onChange" });

    const onSubmitAddZone = (data) => {
        console.log("data", data);
        addZoneRequest(data);
    };

    const addZoneRequest = async (data) => {
        try {
            const response = await requestHttp({
                endpoint: "/zones",
                body: data,
            });
            console.log(response);
            showAlert(
                "Zona Agregada",
                "Se ha registrado la zona con éxito",
                SW_ICON.SUCCESS,
                () => { navigate('/add-property') }
            );
        } catch (error) {
            console.log("error", error);
            showAlert("Error", "Error en los datos de registro", SW_ICON.ERROR);
        }
    };

    if (cities != null) {
        return (
            <Page hideMenu>
                <PageTitle>Agregar Zona</PageTitle>
                <br />
                <form onSubmit={handleSubmit(onSubmitAddZone)}>
                    <FormControl>
                        <FormControlInput>
                            <label>Ciudad</label>
                            <select id="city" name="city" {...register("city")} >
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
                            <label>Código</label>
                            <input
                                type="number"
                                {...register("code", { required: true, pattern: /[0-9]+/, minLength: 4, maxLength: 4 })}
                            />
                            {errors.code && <span>* Valor invalido</span>}
                        </FormControlInput>
                    </FormControl>
                    <FormControl>
                        <FormControlInput>
                            <label>Nombre</label>
                            <input
                                type="text"
                                {...register("name", { required: true, pattern: /[a-zA-Z\t]+|(^$)/, minLength: 3, maxLength: 50 })}
                            />
                            {errors.name && <span>* Valor invalido</span>}
                        </FormControlInput>
                    </FormControl>
                    <br />
                    <Button
                        disabled={!isValid}
                        type="submit"
                        onPress={() => { }}
                        label="Agregar zona"
                    />
                </form>
                <br />
                <Link to='/add-property'>Volver</Link>
                <br />
            </Page>
        );
    } else {
        return (
            <p>Cargando ciudades...</p>
        )
    }
}

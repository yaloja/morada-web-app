import React from "react";
import { useState } from "react"
import { Page } from "../../components/Page"
import { PageTitle } from "../../globalStyles"
import { Button } from "../../components/Button"
import { FormControl, FormControlInput, FormControlAction } from "../../globalStyles"
import { Link } from "react-router-dom"
import { requestHttp } from "../../utils/HttpRequest";
import { useForm } from "react-hook-form";
import { showAlert, SW_ICON } from "../../utils/SwAlert";
import { useNavigate } from "react-router-dom";

export const AddCity = () => {

    const navigate = useNavigate();
    const {
        register,
        formState: { errors, isValid },
        handleSubmit
    } = useForm({ mode: "onChange" });

    const onSubmitAddCity = (data) => {
        console.log("data", data);
        addCityRequest(data);
    };

    const addCityRequest = async (data) => {
        try {
          const response = await requestHttp({
            endpoint: "/cities",
            body: data,
          });
          console.log(response);
          showAlert(
            "Ciudad Agregada",
            "Se ha registrado la ciudad con éxito",
            SW_ICON.SUCCESS,
            () => { navigate('/add-property') }
          );
        } catch (error) {
          console.log("error", error);
          showAlert("Error", "Error en los datos de registro", SW_ICON.ERROR);
        }
      };

    return (
        <Page hideMenu>
            <PageTitle>Agregar Ciudad</PageTitle>
            <br />
            <form onSubmit={handleSubmit(onSubmitAddCity)}>
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
                    label="Agregar ciudad"
                />
            </form>
            <br />
            <Link to='/add-property'>Volver</Link>
            <br />
        </Page>
    );
}

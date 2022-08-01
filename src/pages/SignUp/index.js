import * as React from "react";
import { useState } from "react"
import { Page } from "../../components/Page"
import { PageTitle } from "../../globalStyles"
import { Button } from "../../components/Button"
import { FormControl, FormControlInput, FormControlAction } from "../../globalStyles"
import { Link } from "react-router-dom"
import { IoEyeOff, IoEye } from 'react-icons/io5'
import { ButtonIcon } from "../../components/ButtonIcon"
import { requestHttp } from "../../utils/HttpRequest";
import { useForm } from "react-hook-form";
import { showAlert, SW_ICON } from "../../utils/SwAlert";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {

  const [visiblePass, setVisiblePass] = useState(false)
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit
  } = useForm({ mode: "onChange" });

  const tooglePasswordVisible = () => {
    setVisiblePass(!visiblePass);
  }

  const onSubmitSignup = (data) => {
    console.log("data", data);
    loginRequest(data);
  };

  const loginRequest = async (data) => {
    try {
      const response = await requestHttp({
        endpoint: "/users/signup",
        body: data,
      });
      console.log(response);
      showAlert(
        "Bienvenido",
        "Registro exitoso",
        SW_ICON.SUCCESS,
        () => { navigate('/') }
      );
    } catch (error) {
      console.log("error", error);
      showAlert("Error", "Error en los datos de registro", SW_ICON.ERROR);
    }
  };

  return (
    <Page hideMenu>
      <PageTitle>Registro de usuario</PageTitle>
      <br />
      <form onSubmit={handleSubmit(onSubmitSignup)}>
        <FormControl>
          <FormControlInput>
            <label>Tipo Identificación</label>
            <select name="combo" {...register("documentType")}>
              <option value="cc" selected>Cédula de ciudadanía</option>
              <option value="ce">Cédula de extranjería</option>
              <option value="nit">Nit</option>
            </select>
          </FormControlInput>
        </FormControl>

        <FormControl>
          <FormControlInput>
            <label>Identificación</label>
            <input type="text"
              {...register("document", { required: true, pattern: /[0-9]+/, minLength: 3, maxLength: 20 })}
            />
            {errors.document && <span>* Valor invalido</span>}
          </FormControlInput>
        </FormControl>

        <FormControl>
          <FormControlInput>
            <label>Nombre completo</label>
            <input type="text"
              {...register("name", { required: true, pattern: /^[A-Z]/, minLength: 3, maxLength: 50 })}
            />
            {errors.name && <span>* Valor invalido</span>}
            {/* {errors.nombre?.type === "required" && (
                         <span>El campo Nombre es requerido</span>
                         )}
                         {errors.nombre?.type === "pattern" && (
                         <span>Formato de Nombre incorrecto</span>
                         )} */}
          </FormControlInput>
        </FormControl>

        <FormControl>
          <FormControlInput>
            <label>Teléfono</label>
            <input type="phone"
              {...register("phone", { required: true, pattern: /[0-9]+/, minLength: 7, maxLength: 10 })}
            />
            {errors.phone && <span>* Valor invalido</span>}
            {/* {errors.telefono?.type === "required" && (
                          <span>El campo Telefono es requerido</span>
                          )}
                          {errors.telefono?.type === "pattern" && (
                          <span>Formato de Telefono incorrecto</span>
                          )}  */}
          </FormControlInput>
        </FormControl>

        <FormControl>
          <FormControlInput>
            <label>Correo electrónico</label>
            <input type="email"
              {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
            />
            {errors.email && <span>* Valor invalido</span>}
            {/* {errors.email?.type === "required" && (
                          <span>El campo correo es requerido</span>
                        )}
                        {errors.email?.type === "pattern" && (
                          <span>Ingrese un correo electrónico valido</span>
                        )}   */}
          </FormControlInput>
        </FormControl>

        <FormControl>
          <FormControlInput>
            <label>Contraseña</label>
            <input type={visiblePass ? "text" : "password"}
              {...register("password", { required: true })}
            />
            {errors.password && <span>* Valor invalido</span>}
            {/* {errors.password?.type === "required" && (
                              <span>El campo contraseña es requerido</span>
                            )} */}
          </FormControlInput>
          <FormControlAction>
            <ButtonIcon icon={visiblePass ? IoEyeOff : IoEye} onPress={tooglePasswordVisible}></ButtonIcon>
          </FormControlAction>
        </FormControl>

        <FormControl>
          <FormControlInput>
            <label>Confirmar contraseña</label>
            <input type={visiblePass ? "text" : "password"}
              {...register("password2", { required: true })}
            />
            {errors.password2 && <span>* Valor invalido</span>}
            {/* {errors.password2?.type === "required" && (
                              <span>El campo contraseña es requerido</span>
                            )} */}
          </FormControlInput>
          <FormControlAction>
            <ButtonIcon icon={visiblePass ? IoEyeOff : IoEye} onPress={tooglePasswordVisible}></ButtonIcon>
          </FormControlAction>
        </FormControl>

        <br />
        <Button
          disabled={!isValid}
          type="submit"
          onPress={() => { }}
          label="Registrarse"
        />
      </form>
      <h4>Ya tienes una cuenta?</h4><Link to='/login'>Inicia sesion</Link>

    </Page>
  );
}
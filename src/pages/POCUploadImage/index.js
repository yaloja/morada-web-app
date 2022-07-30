import React, { Fragment, useState } from "react";
import { Button } from "../../components/Button";
import { CONTENT_TYPES, requestHttp } from "../../utils/HttpRequest";
import { showAlert, SW_ICON } from "../../utils/SwAlert";
import { PageSubTitle } from "../../globalStyles"

export const POCUploadImage = () => {

    const [file, setFile] = useState(null);

    const fileSeletedHandler = (event) => {
        const fileSelected = event.target.files[0];
        setFile(fileSelected);
        //requestUploadFile(file);
    };

    const uploadFileHandler = () => {
        if(file) {
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
            console.log('response', response)
        } catch {
            console.log('error', )
        }
    }
    return (
        <Fragment>
            <PageSubTitle>Cargar imagen</PageSubTitle>
            <input
                type="file"
                accept="image/png, image?jpeg"
                onChange={fileSeletedHandler}
            />
            <br></br>
            <br></br>
            <Button label="Cargar imagen" onPress={uploadFileHandler}/>
        </Fragment>
    );
};
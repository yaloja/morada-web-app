import React from "react";
import { Fragment } from "react"
import { ButtonStyled, LinkStyled } from "./styles"

export const Button = ( { label, onPress, linkTo }) => {
    
    return (
        <Fragment>
            {
                onPress 
                    ? (<ButtonStyled onClick={onPress}> {label} </ButtonStyled>)
                    : (<LinkStyled to={linkTo}> {label} </LinkStyled>)
            }
        </Fragment>
    )

}


import React from "react";
import { WelcomeMessageWrapper, BestPlaceNearbyWrapper } from "./styles";
import { IoThumbsUp }  from "react-icons/io5"
import { Fragment } from "react";

    export const WelcomeMessage = () => (

    <Fragment>
        <WelcomeMessageWrapper>
            <p className = "find">Encuentra</p>
        </WelcomeMessageWrapper>
        <BestPlaceNearbyWrapper>
            <p className = "bestplace">el mejor lugar</p>
            <p className = "nearby">cerca a ti</p>
            <IoThumbsUp/>
        </BestPlaceNearbyWrapper>
    </Fragment>


)
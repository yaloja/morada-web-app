import { WelcomeMessageWrapper, BestPlaceNearbyWrapper } from "./styles";
import { IoThumbsUp }  from "react-icons/io5"
import { Fragment } from "react";

    export const WelcomeMessage = () => (

    <Fragment>
        <WelcomeMessageWrapper>
            <p className = "find">Find</p>
        </WelcomeMessageWrapper>
        <BestPlaceNearbyWrapper>
            <p className = "bestplace">best place</p>
            <p className = "nearby">nearby</p>
            <IoThumbsUp/>
        </BestPlaceNearbyWrapper>
    </Fragment>


)
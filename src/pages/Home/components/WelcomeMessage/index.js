import { WelcomeMessageWrapper, BestPlaceNearbyWrapper } from "./styles";
import { IoThumbsUpSharp }  from "react-icons/io5"

    export const WelcomeMessage = () => (

    <>
        <WelcomeMessageWrapper>
            <p className = "find">Find</p>
        </WelcomeMessageWrapper>
        <BestPlaceNearbyWrapper>
            <p className = "bestplace">best place</p>
            <p className = "nearby">nearby</p>
            <IoThumbsUpSharp/>
        </BestPlaceNearbyWrapper>
    </>


)
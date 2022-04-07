import { WelcomeMessageWrapper, BestPlaceNearbyWrapper } from "./styles";
import { IoAmericanFootballOutline}  from "react-icons/io5"

    export const WelcomeMessage = () => (

    <><WelcomeMessageWrapper>
        <p class = "find">Find</p>
    </WelcomeMessageWrapper>
    <BestPlaceNearbyWrapper>
        <p class = "bestplace">best place</p>
        <p class = "nearby">nearby</p>
        <IoAmericanFootballOutline/>
    </BestPlaceNearbyWrapper></>


)
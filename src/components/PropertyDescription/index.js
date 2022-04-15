import { PropertyDescriptionWrapper } from "./styles"

export const PropertyDescription = ({description}) => (
    <PropertyDescriptionWrapper>
        <h1>
            Descripcion:
        </h1>
        <p>
            {description}
        </p>
    </PropertyDescriptionWrapper>
)
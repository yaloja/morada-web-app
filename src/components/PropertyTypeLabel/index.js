import { PropertyTypeLabelWrapper } from "./styles"

export const PropertyTypeLabel = ({typeId}) => (
    <PropertyTypeLabelWrapper>
        <p>
            {typeId}
        </p>
    </PropertyTypeLabelWrapper>
)
import React from "react";
import styled from 'styled-components';
import { MAIN_COLOR } from '../../constants/styles';

const ButtonIconStyle = styled.button`
    border: none;
    border-radius: 6px;
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 0;
    svg {
        color: ${MAIN_COLOR};
        font-size: 1.7em;
    }
    &:hover {
        cursor: pointer;
        background-color: ${MAIN_COLOR};
        svg {
            color: #fff;
        }
    }
`;

export const ButtonIcon = ({icon: Icon, onPress, disabled}) => (
    <ButtonIconStyle type="button" onClick={onPress} disabled={disabled}>
        <Icon/>
    </ButtonIconStyle>
)
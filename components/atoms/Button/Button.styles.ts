import styled, { css } from 'styled-components';
import { Colors } from '../../theme/colors';

interface ButtonStyleProps {
    primary?: boolean;
    secondary?: boolean;
    disabled?: boolean;
}

export const Button = styled.button<ButtonStyleProps>`
    ${({ primary, secondary, disabled }) => css`
        padding: 8px 20px;
        border-radius: 5px;
        display: block;
        border: 2px solid ${Colors.basic};
        color: ${Colors.basic};
        background-color: ${Colors.white};
        cursor: pointer;

        ${primary && css`
            background-color: ${Colors.tomatoRed};
            color: ${Colors.white};
            border-color: ${Colors.tomatoRed};
        `}
        
        ${secondary && css`
            background-color: ${Colors.blue};
            color: ${Colors.white};
            border-color: ${Colors.blue};
        `}
        
        ${disabled && css`
            color: ${Colors.lightGrey};
            border-color: ${Colors.lightGrey};
        `}
    `}
`;
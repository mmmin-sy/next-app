import styled, { css } from 'styled-components';
import { Colors } from '../../theme/colors';

interface InputStyleProps {
    invalid?: boolean;
    disabled?: boolean;
    focused?: boolean;
}

export const Input = styled.input<InputStyleProps>`
    ${({ invalid, disabled, focused }) => css`
        line-height: 22px;
        border-radius: 3px;
        border: 1px solid ${Colors.basic};
        padding: 10px;
        
        ${invalid && css`
            border-color: ${Colors.tomatoRed};
        `}
        
        ${disabled && css`
            border-color: ${Colors.lightGrey};
            color: : ${Colors.lightGrey};
        `}
        
        ${focused && css`
            border-color: ${Colors.blue};
        `}
    `}
`;
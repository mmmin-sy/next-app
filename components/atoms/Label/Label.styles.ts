import styled, { css } from 'styled-components';
import { Colors } from '../../theme/colors';

interface LabelStyleProps {
    disabled?: boolean;
    invalid?: boolean;
}

export const Label = styled.label<LabelStyleProps>`
    ${({ disabled, invalid }) => css `
        color: ${Colors.basic};
        
        ${disabled && css `
            color:  ${Colors.lightGrey};
        `}
        
        ${invalid && css `
            color:  ${Colors.tomatoRed};
        `}
    `}
`;
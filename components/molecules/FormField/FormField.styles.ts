import styled, { css } from 'styled-components';
import { Label } from '../../atoms/Label/Label.styles';
import { Colors } from '../../theme/colors';

export const FormField = styled.div`
    ${() => css `
        display: flex;
        margin-bottom: 20px;

        flex-direction: column;
        ${Label} {
            margin-right: 10px;
        }
    `}
`;

export const FormFieldInput = styled.div`
    ${() => css `
        width: 100%;
    `}
`;

export const ErrorMessage = styled.div`
    color: ${Colors.tomatoRed};
    margin-top: 5px;
`;
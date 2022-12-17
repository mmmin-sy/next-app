import styled, { css } from 'styled-components';
import { Label } from '../../atoms/Label/Label.styles';
import { Colors } from '../../theme/colors';
import { Input } from '../../atoms/Input/Input.styles';
interface FormFieldStyleProps {
    disabled?: boolean;
    invalid?: boolean;
    focused?: boolean;
}

export const FormField = styled.div`
    ${() => css `
        display: flex;
        margin-bottom: 20px;
        flex-direction: column;
        position: relative;

        ${Input} {
            padding-right: 30px;
            &:focus {
                padding-right: 30px;
            }
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

export const InputLabel = styled(Label)<FormFieldStyleProps>`
    ${({ disabled, invalid, focused }) => css`
        position: absolute;
        top: -8px;
        left: 8px;
        background-color: ${Colors.white};
        padding: 0 5px;

        ${disabled && css`
            color: ${Colors.lightGrey};
        `}

        ${invalid && css`
            color: ${Colors.tomatoRed};
        `}

        ${focused && css`
            color: ${invalid ? Colors.tomatoRed : Colors.blue };
        `}
    `}
`;

export const Icon = styled.div<FormFieldStyleProps>`
    ${({ invalid }) => css`
        position: absolute;
        top: 8px;
        right: 8px;

        ${invalid && css`
            color: ${Colors.tomatoRed};
        `}
    `}
`;
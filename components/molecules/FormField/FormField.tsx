import { ErrorMessage } from 'formik';
import { Input, InputProps } from '../../atoms/Input/Input';
import { Label } from '../../atoms/Label/Label';
import * as Styled from './FormField.styles';
import { BaseSyntheticEvent } from 'react';

export type FormFieldProps = {
    name: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    invalid?: boolean;
    errorMessage?: string;
    children?: React.ReactNode;
    type?: string;
    onChange?: (event: BaseSyntheticEvent) => void;
} & InputProps;

export const FormField: React.FC<FormFieldProps> = ({
    type,
    label,
    placeholder,
    disabled,
    invalid,
    errorMessage,
    onChange
}) => {
    return (
        <Styled.FormField>
            {label && (
                <Label
                    disabled={disabled}
                    invalid={invalid}
                >
                    {label}
                </Label>
            )}

            <Input 
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                invalid={invalid}
                onChange={onChange}
            />
            
            {errorMessage && <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>}
            
        </Styled.FormField>
    );
}

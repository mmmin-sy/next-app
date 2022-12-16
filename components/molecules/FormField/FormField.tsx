import { ErrorMessage } from 'formik';
import { Input, InputProps } from '../../atoms/Input/Input';
import * as Styled from './FormField.styles';

export type FormFieldProps = {
    name: string;
    label?: string;
    errorMessage?: string;
    children?: React.ReactNode;
    focused?: boolean;
} & InputProps;

export const FormField: React.FC<FormFieldProps> = ({
    type,
    label,
    placeholder,
    disabled,
    invalid,
    errorMessage,
    onChange,
    onFocus,
    onBlur,
    ref,
    focused = false
}) => {
    
    return (
        <Styled.FormField>
            {label && (
                <Styled.InputLabel
                    disabled={disabled}
                    invalid={invalid}
                    focused={focused}
                >
                    {label}
                </Styled.InputLabel>
            )}

            <Input 
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                invalid={invalid}
                focused={focused}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                ref={ref}
            />
            
            {errorMessage && <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>}
            
        </Styled.FormField>
    );
}

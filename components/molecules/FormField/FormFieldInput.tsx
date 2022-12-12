import { FormField, FormFieldProps } from './FormField';
import { useField } from 'formik';
import * as Styled from './FormField.styles';

export const FormFieldInput: React.FC<FormFieldProps> = ({
    name,
    label,
    placeholder,
    disabled,
    type
}) => {
    const [input, meta, helper] = useField(name);

    return (
        <Styled.FormFieldInput>
            <FormField
                type={type}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                invalid={(!!meta.error && input.value !== '')}
                label={label}
                errorMessage={(!!meta.error && input.value !== '') ? meta.error : undefined}
                value={input.value}
                onChange={(event) => {
                    helper.setValue(event.target.value);
                }}
            />
        </Styled.FormFieldInput>
    );
}

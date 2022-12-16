import { FormField, FormFieldProps } from './FormField';
import { useField } from 'formik';
import * as Styled from './FormField.styles';
import React, { useState } from 'react';

export const FormFieldInput: React.FC<FormFieldProps> = ({
    name,
    label,
    placeholder,
    disabled,
    type
}) => {
    const [input, meta, helper] = useField(name);
    const [focused, setFocused] = useState<boolean>(false);
    const inputRef = React.useRef<HTMLInputElement>(null);
    
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
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                focused={focused}
                ref={inputRef}
            />
        </Styled.FormFieldInput>
    );
}

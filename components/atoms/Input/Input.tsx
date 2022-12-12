import { BaseSyntheticEvent, useState } from 'react';
import * as Styled from './Input.styles';

export interface InputProps {
    type?: string;
    value?: any;
    disabled?: boolean;
    readOnly?: boolean;
    inputMode?: 'text' | 'none' | 'tel' | 'email' | 'numeric' | 'search' | 'url' | 'decimal';
    placeholder?: string;
    invalid?: boolean;
    onChange?: (event: BaseSyntheticEvent) => void;
    onBlur?: (event: BaseSyntheticEvent) => void;
}

export const Input: React.FC<InputProps> = ({ 
    onChange, value, disabled, readOnly, inputMode, placeholder, invalid, type 
}) => {

    return (
        <Styled.Input 
            type={type}
            disabled={disabled}
            readOnly={readOnly}
            value={value}
            inputMode={inputMode}
            placeholder={placeholder}
            invalid={invalid}
            onChange={onChange}
        />
    );
}

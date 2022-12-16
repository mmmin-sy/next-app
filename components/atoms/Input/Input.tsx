import { BaseSyntheticEvent } from 'react';
import * as Styled from './Input.styles';
import React from 'react';

export interface InputProps {
    type?: string;
    value?: any;
    disabled?: boolean;
    readOnly?: boolean;
    inputMode?: 'text' | 'none' | 'tel' | 'email' | 'numeric' | 'search' | 'url' | 'decimal';
    placeholder?: string;
    invalid?: boolean;
    onChange?: (event: BaseSyntheticEvent) => void;
    onFocus?: (event: BaseSyntheticEvent) => void;
    onBlur?: (event: BaseSyntheticEvent) => void;
    ref?: React.RefObject<HTMLInputElement>;
    focused?: boolean;
}

export const Input: React.FC<InputProps> = ({ 
    onChange, onFocus, onBlur, value, focused, disabled, readOnly, inputMode, placeholder, invalid, type, ref 
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
            focused={focused}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            ref={ref}
        />
    );
}

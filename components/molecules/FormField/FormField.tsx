import { ErrorMessage } from 'formik';
import { Input, InputProps } from '../../atoms/Input/Input';
import * as Styled from './FormField.styles';
import { useState } from 'react';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';

export type FormFieldProps = {
    name: string;
    label?: string;
    errorMessage?: string;
    children?: React.ReactNode;
    focused?: boolean;
    isPassWord?: boolean;
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
    focused = false,
    isPassWord = false,
    name,
}) => {
    const [visiblePassWord, setVisiblePassWord] = useState(false);
    const [inputType, setInputType] = useState<string | undefined>(type);

    const setPassWordType = () => {
        setInputType(visiblePassWord ? 'password' : 'text')
        setVisiblePassWord(!visiblePassWord)
    }

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
                type={inputType}
                placeholder={placeholder}
                disabled={disabled}
                invalid={invalid}
                focused={focused}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                ref={ref}
            />
            
            
            <Styled.Icon invalid={invalid}>
                {errorMessage && !isPassWord && <WarningAmberRoundedIcon />}

                {isPassWord && (
                    <div onClick={() => setPassWordType()}>
                        {visiblePassWord 
                            ? <VisibilityOffRoundedIcon />
                            : <RemoveRedEyeRoundedIcon />}
                        
                    </div>
                )}
            </Styled.Icon>
            
            {errorMessage && <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>}
            
        </Styled.FormField>
    );
}

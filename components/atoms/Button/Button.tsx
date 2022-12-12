import * as Styled from './Button.styles';

interface ButtonProps {
    children: React.ReactNode;
    primary?: boolean;
    secondary?: boolean;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset' | undefined;
}

export const Button: React.FC<ButtonProps> = ({ children, primary, secondary, disabled, type }) => {
    return (
        <Styled.Button
            type={type}
            primary={primary}
            secondary={secondary}
            disabled={disabled}
        >
            {children}
        </Styled.Button>
    );
}
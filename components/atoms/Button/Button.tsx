import * as Styled from './Button.styles';

interface ButtonProps {
    children: React.ReactNode;
    primary?: boolean;
    secondary?: boolean;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, primary, secondary, disabled }) => {
    return (
        <Styled.Button
            primary={primary}
            secondary={secondary}
            disabled={disabled}
        >
            {children}
        </Styled.Button>
    );
}
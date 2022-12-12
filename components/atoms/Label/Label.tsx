import * as Styled from './Label.styles';

interface LabelProps {
    children: React.ReactNode;
    disabled?: boolean;
    invalid?: boolean;
}

export const Label: React.FC<LabelProps> = ({ 
    children,
    disabled,
    invalid 
}) => {
    return (
        <Styled.Label
            disabled={disabled}
            invalid={invalid}
        >
            {children}
        </Styled.Label>
    );
}
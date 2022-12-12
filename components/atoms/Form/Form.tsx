import * as Styled from './Form.styles';

interface FormProps {
    children: React.ReactNode;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    onChange?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: React.FC<FormProps> = ({ children, onSubmit, onChange }) => {
    return (
        <Styled.Form onSubmit={onSubmit} onChange={onChange}>
            {children}
        </Styled.Form>
    );
}

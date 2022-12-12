import * as Styled from './Grid.styles';

interface RowProps {
    children: React.ReactNode;
    paddingLeft?: number;
    paddingRight?: number;     
}
export const Row: React.FC<RowProps> = ({
    children,
    paddingLeft,
    paddingRight,    
}) => {
    return (
        <Styled.Row
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
        >
            {children}
        </Styled.Row>
    );
}

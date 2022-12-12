import * as Styled from './Grid.styles';

interface CellProps {
    children: React.ReactNode;
    column?: number;
}
export const Cell: React.FC<CellProps> = ({
    children,
    column,    
}) => {
    return (
        <Styled.Cell
            column={column}
        >
            {children}
        </Styled.Cell>
    );
}

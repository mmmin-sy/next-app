import styled, { css } from 'styled-components';

interface RowStyleProps {
   paddingLeft?: number;
   paddingRight?: number; 
}

interface CellStyleProps {
   column?: number;
}

export const Row = styled.div<RowStyleProps>`
    ${({ paddingLeft, paddingRight }) => css `
        display: grid;
        grid-template-columns: auto auto;

        ${paddingLeft && css`
           padding-left: ${paddingLeft}px;
        `}
       
        ${paddingRight && css`
           padding-right: ${paddingRight}px;
        `}
    `}
`;

export const Cell = styled.div<CellStyleProps>`
    ${({ column }) => css `
        grid-column: span ${column};
        padding: 0 10px;
    `}
`;

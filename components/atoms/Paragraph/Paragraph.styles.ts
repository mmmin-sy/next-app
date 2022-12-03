import styled, { css } from 'styled-components';

interface ParagraphStyleProps {
    align: 'left' | 'center' | 'right';
}

export const Paragraph = styled.p<ParagraphStyleProps>`
    ${({ align }) => css`
        text-align: ${align};
    `}
`;

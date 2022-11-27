import styled, { css } from 'styled-components';

interface LinkStyleProps {
    underline?: boolean;
}
export const Link = styled.a<LinkStyleProps>`
    ${({ underline }) => css`
        font-size: 18px; 
        color: #565656;
        cursor: pointer;
        &:hover {
            color: #F53D16;        
        }  
        
        ${underline && css`
            text-decoration: underline;
        `}
    `}
`;
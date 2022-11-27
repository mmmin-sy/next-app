import styled, { css } from 'styled-components';
import Link from "next/link";

export interface NavBarStyleProps {
    active: boolean;
}

export const Navigation = styled.nav`
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px; 
`;

export const Image = styled.img`
    ${() => css`
        max-width: 100px;
        margin-bottom: 5px;
    `}
`;
export const Links = styled.div`
    ${() => css`
        display: flex;
        gap: 10px;
    `}
`;

export const LinkText = styled.span<NavBarStyleProps>`
    ${({ active }) => css`
        color: ${active ? 'pink': '#c8c8c8'};
    `}
`;
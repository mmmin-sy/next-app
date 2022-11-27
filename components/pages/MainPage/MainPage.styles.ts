import Styled, { css } from 'styled-components';

export const Container = Styled.div`
    ${() => css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 20px;
        gap: 20px;
    `}
`;

export const Movie = Styled.div`
    text-align: center;
`;

export const MovieImg = Styled.img`
    max-width: 100%;
    border-radius: 12px;
    transition: transform 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    &:hover {
        transform: scale(1.05) translateY(-10px);
    }
`;

export const MovieTitle = Styled.h4`
    font-size: 18px;
    text-align: center;
`;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: #ffffff;
        font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
        font-size: 12px;
    }
    
    button {
        font-size: 12px;
    }
    
    a {
        text-decoration: none;
    }
`;
export default GlobalStyle;
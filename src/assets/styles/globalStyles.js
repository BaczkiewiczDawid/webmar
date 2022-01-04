import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, p, a, span, li {
        color: #2a2a2a;
    }
`;

export default GlobalStyle;
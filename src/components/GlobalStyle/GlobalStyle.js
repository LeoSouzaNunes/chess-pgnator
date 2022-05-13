import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;

    font-family: 'Roboto', sans-serif;
}

body{
    margin:0;
    padding:0;
    box-sizing:border-box;
    
    min-height:100vh;
    
    font-family: 'Roboto', sans-serif;

    background-color: #2D2424;
}

#root{
    padding: 30px 100px;
}
`;

export default GlobalStyle;

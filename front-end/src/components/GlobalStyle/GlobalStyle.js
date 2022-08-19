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
    padding: 0px 90px;
}

:disabled{
    opacity:0.7;
}

b {
            color: #e85640;
}

 /* Hide scrollbar for Chrome, Safari and Opera */
*::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
*{
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}



`;

const size = {
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
};

export const device = {
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
};

export default GlobalStyle;

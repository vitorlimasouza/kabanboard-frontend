import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;500&family=Roboto:wght@100;500&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        border:0;
    }

    html, body, #root {
        height: 100%;
    }

    body{
        font: 14px 'Roboto', sans-serif;
        background: #fff;
        -webkit-font-smoothing: antialiased !important; 
    }

    ul{
        list-style: none;
    }
`
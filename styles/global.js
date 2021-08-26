import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`


.Row {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
}

h1, h2, h3 {
    font-family: freight-text-pro, serif;
}
p {
    font-family: poppins, sans-serif;
}
button {
    border: none;
    background: none;
    cursor: pointer;
}
button.button, a.button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    background: #1B1B1B;
    border: 1px solid #1B1B1B;
    box-sizing: border-box;
    border-radius: 3px;
    height: 50px;
    color: rgba(239, 239, 239, 1);
    &.white {
        color: #000;
        background: #fff;
        border: 1px solid #1B1B1B;
    }
    &:hover {
        opacity: 0.9;
    }
}    
`;

export default GlobalStyle;

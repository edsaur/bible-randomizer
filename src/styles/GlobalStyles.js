import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
      *::before,
      *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      
        /* Creating animations for dark mode */
        transition: background-color 0.3s, border 0.3s;
      }

  body {
    margin: 0;
    font-family: 'Poppins', Arial, sans-serif; /* Use 'Inter' with fallbacks */
    background-color: #f7f8fa; /* Optional: light modern background color */
    color: #333; /* Optional: modern default text color */
  }
`;

export default GlobalStyle;

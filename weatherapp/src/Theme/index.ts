import { createGlobalStyle } from 'styled-components';
export const theme ={
  sizes:{
    gutterSmall : '2rem',
    gutterMedium : '4rem',
    gutterLarge : '6rem',
  },
  colors:{
    backgroundcolor:'lightBlue',
  }
}


 
 const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle
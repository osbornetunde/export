import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';
import GreycliffCF from './assets/fonts/GreycliffCF-Regular.otf';
import GreycliffCFMedium from './assets/fonts/GreycliffCF-Medium.otf';
import GreycliffCFLight from './assets/fonts/GreycliffCF-Light.otf';
import GreycliffCFBold from './assets/fonts/GreycliffCF-Bold.otf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: GreycliffCF;
    src: url(${GreycliffCF});
    font-style: normal;
  }

  @font-face {
    font-family: GreycliffCF-Medium;
    src: url(${GreycliffCFMedium});
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: GreycliffCF-Light;
    src: url(${GreycliffCFLight});
    font-style: normal;
  }

  @font-face {
    font-family: GreycliffCF-bold;
    src: url(${GreycliffCFBold});
    font-style: normal;
  }

  ${normalize}
  *::before,
  *::after,
  * {
    box-sizing: border-box;
  }

  :root {
    --primary-background: #ffffff;
    --secondary-background: #F9F9F9;
    --primary-font: GreycliffCF, sans-serif;
    --font-bold: GreycliffCF-bold, sans-serif;
    --font-light: GreycliffCF-Light, sans-serif;
    --input-background: #FAFCFF;
    --button-background: #4258BA;
    --button-background-light: rgba(66, 88, 186, 0.05);
    --primary-font-color: #2c2c2c;
    --primary-black: #000000;
    --primary-grey: #f5f5f5;
    --secondary-black: #1C1C1C;
    --secondary-blue: #3988C5;

  }

  html {
    width: 100%;
    font-size: 62.5%;
  }

  html, body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    max-width: 100vw;
  }

  body {
    font-family: var(--primary-font);
    width: 100%;
  }

  ::-webkit-scrollbar {
    width: 0;
    height: .5rem;
  }

  ::-webkit-resizer {
    width: .1em;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  .ant-table-sticky-scroll-bar {
    display: none;
  }

  #root {
    //height: 100%;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6, p, ul {
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-family: var(--primary-font);
  }
`;

export default GlobalStyle;

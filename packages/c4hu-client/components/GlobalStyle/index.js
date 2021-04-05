import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${(props) => (props.whiteColor ? "white" : "black")};
    font-family: sans-serif;
  }

  main {

    width: 100%;
    margin: 0 auto;
    min-height: calc(100vh - 133px) !important;    
  }

  header {
    padding: 0 5px !important;
  }

  .ant-select-dropdown {
    position: fixed;
  }  
`;
export default GlobalStyle;

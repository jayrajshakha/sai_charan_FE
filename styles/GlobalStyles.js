import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {

  font-family: "Gilroy", sans-serif;
  // color: #fff;
  padding: 0;
  margin: 0;

  &::-webkit-scrollbar-thumb {
    background-color: #fff;
  }

  &::-webkit-scrollbar {
    background-color: #000;
    width: 2px;
  }
}


html,
body {

    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    margin: 0;
    &::-webkit-scrollbar-thumb {
    background-color: #fff;
    min-height:100vh;
  }

  &::-webkit-scrollbar {
    background-color: #000;
    width: 2px;
  }
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  font-family: "Gilroy", sans-serif;
  padding: 0;
  margin: 0;
  user-select : auto;
}
`;

export default GlobalStyles;

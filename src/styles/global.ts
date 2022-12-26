import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: sans-serif;
      font-style: normal;
      font-size: 16px;
      line-height: 18px;
  }

  body{
    background-color: #E6E9F0;
  }

  button{
      border: 0;
      margin: 0;
      padding: 0;
      cursor: pointer;
      background-color: transparent
  }
`
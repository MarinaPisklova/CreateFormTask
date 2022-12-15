import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/Header/Header';

const Global = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: sans-serif;
      font-style: normal;
      font-size: 16px;
      line-height: 18px;
  }
  button{
      border: 0;
      margin: 0;
      padding: 0;
      cursor: pointer;
  }

  body{
    background-color: #E6E9F0;
  }
`

export function App() {
  return (
    <>
      <Global />
      <Header />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}
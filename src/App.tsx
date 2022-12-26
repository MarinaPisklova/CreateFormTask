import React, { FC, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AppRouter from './components/simple/AppRouter/AppRouter';
import Header from './components/smart/Header/Header';
import APIService from './core/API/APIService';
import { theme } from './core/theme';
import { GlobalStyle } from './styles/global';

export const App: FC = () => {
  useEffect(() => {
    APIService.getLocation();
  }, []);


  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}
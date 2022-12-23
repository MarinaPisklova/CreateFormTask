import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/Header/Header';
import shippingForm from './store/formStore';

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
      background-color: transparent
  }

  body{
    background-color: #E6E9F0;
  }
`

export function App() {
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      var ip = ''; // Leave blank to lookup current IP address
      var XMLHttp = new XMLHttpRequest();
      XMLHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var ipwhois = JSON.parse(this.responseText);
          shippingForm.onAddressFieldChange("shipping", "country", ipwhois.country);
          shippingForm.onAddressFieldChange("shipping", "city", ipwhois.city);
          shippingForm.onAddressFieldChange("shipping", "zip", ipwhois.postal);
        }
      };
      XMLHttp.open('GET', 'https://ipwho.is/' + ip, true);
      XMLHttp.send();
    });
  }, []);


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
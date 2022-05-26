import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyles from './styles/global';

import { CartProvider } from './hooks/useCart';
import { LoginProvider } from './hooks/useLogin';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
    <LoginProvider>
        <CartProvider>
          <GlobalStyles />
          <Routes />
          <ToastContainer autoClose={3000} />
        </CartProvider>
      </LoginProvider>
    </BrowserRouter>
  );
};

export default App;

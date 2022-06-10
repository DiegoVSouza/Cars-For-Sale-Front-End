import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyles from './styles/global';

import { ModalProvider } from './hooks/useModal';
import { LoginProvider } from './hooks/useLogin';
import { ContactModal } from './components/ContactModal';
import Modal from 'react-modal'
import Header from './components/Header';
import Footer from './components/Footer';

Modal.setAppElement('#root');

const App = (): JSX.Element => {


  return (
    <BrowserRouter>
    <LoginProvider>
        <ModalProvider>
          <GlobalStyles />
          <Header/>
          <Routes />
          <Footer/>
        </ModalProvider>
      </LoginProvider>
    </BrowserRouter>
  );
};

export default App;

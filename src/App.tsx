import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider, useSelector } from 'react-redux';

import Routes from './routes/routes';
import GlobalStyles from './styles/global';

import { ModalProvider } from './hooks/useModal';
import { ContactModal } from './components/ContactModal';
import Modal from 'react-modal'
import Header from './components/Header';
import Footer from './components/Footer';
import { PersistGate } from 'redux-persist/integration/react';
import { ApplicationState, persistor, store } from './store'

Modal.setAppElement('#root');

const App = (): JSX.Element => {
  const { loading } = useSelector(
    (state: ApplicationState) => state.cars
  );
  const path = window.location.pathname

  return (
    <BrowserRouter>
      <PersistGate loading={loading} persistor={persistor}>
        <ModalProvider>
          <GlobalStyles />
          {path !== '/maissaude/p/createaccount' && path !== '/maissaude/p/login' ? <Header /> : <></>}
          <Routes />
          <Footer />
        </ModalProvider>
      </PersistGate>

    </BrowserRouter>
  );
};

export default App;

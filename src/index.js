import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';


import { App } from 'components/App';
import GlobalStyles from 'styles/Global.styled';
import { persistor, store } from 'redux/store';

import 'styles/fonts/fonts.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter basename='/wallet_front'>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyles />
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>,
  // </React.StrictMode>,
);

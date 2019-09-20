import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import GlobalSyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

//import history from './services/history';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      {/* <Router history={history}> */}
        <Header />
        <Routes />
        <GlobalSyle />
        <ToastContainer color="#fff" autoClose={3000} />
      {/* </Router> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;

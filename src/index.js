import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Route from './routes/route'
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

// import default style
import 'rsuite/dist/styles/rsuite-default.css'; // or 'rsuite/dist/styles/rsuite-default.css'

const mountNode =  document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
 mountNode
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

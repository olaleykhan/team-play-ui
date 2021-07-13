import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Route from './routes/route'
// import { store } from './app/store';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import 'firebase/firestore'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
// import * as serviceWorker from './serviceWorker';

import rootReducer from './store/reducers';

// import default style
import 'rsuite/dist/styles/rsuite-default.css'; // or 'rsuite/dist/styles/rsuite-default.css'





// logger middleware function that logs my actions just before they are reduced
const logger = store => {
  return (next) => {
    return action => {
      console.log("[dispatching middleware]", action);
      const result = next(action);
      console.log('[middle-ware] next state', store.getState());
      return result;
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore( rootReducer,
//   composeEnhancers(
//     applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
//     reduxFirestore(),
//     reactReduxFirebase(fbConfig)

//   )
//   );

const store = createStore(rootReducer,
  composeEnhancers(applyMiddleware( logger, thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {attachAuthIsReady:true})));

const mountNode = document.getElementById('root');


store.firebaseAuthIsReady
.then(()=>{
  ReactDOM.render(
    <Provider store={store}>
      <Route />
    </Provider>,
  mountNode
);

})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

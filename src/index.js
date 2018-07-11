import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";

const reducers = (prev, action) => {
  if (action.type === 'create') {
    return prev.concat([action.task]);
  }
  return prev;
};

const store = createStore(reducers, []);

window.store = store;
ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

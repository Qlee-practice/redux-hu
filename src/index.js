import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import reducers from "./containers/reducers";
import App from './containers/App';

const store = createStore(reducers, {tasks: [], visibilityFilter: 'SHOW_ALL'});

window.store = store;
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

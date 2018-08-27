import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";

const reducers = (prev, action) => {
  switch (action.type) {
    case 'create':
      return {tasks: [{text: action.text, id: action.id, finished: false}, ...prev.tasks]};

    case 'toggle':
      return {
        tasks: prev.tasks.map(task => (
            task.id === action.id ? {...task, finished: !task.finished} : task
        ))
      };

    default:
      return prev;
  }
};

const store = createStore(reducers, {tasks: []});

window.store = store;
ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

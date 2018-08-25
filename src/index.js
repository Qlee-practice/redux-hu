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
      return {tasks: prev.tasks.concat({text: action.task, finished: false})};
// TODO:这里有错误！！！
    case 'toggle':
      const tasks = prev.tasks;
      const currentTask = tasks[action.index];
      currentTask.finished = !currentTask.finished;
      return {tasks};

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

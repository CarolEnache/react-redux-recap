import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { selectSubreddit, fetchPosts } from './redux/actions';
import rootReducer from './redux/reducers';

import './index.css';
import App from './App';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, //lets you dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);

store.dispatch(selectSubreddit('reactjs'));
store.dispatch(fetchPosts('reactjs')).then(() => console.log(store.getState()));

ReactDOM.render(<App />, document.getElementById('root'));

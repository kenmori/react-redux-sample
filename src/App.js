import React from 'react';
import Home from './container/Home';
import About from './container/About';
import Examples from './container/Examples';
import CounterContainer from './container/Counter';
import FormSample from './container/Form';
import './scss/utils/helper.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/reducers';
import rootSaga from './sagas/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';

const defaultState = {};
const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const store = createStore(reducers, defaultState, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/counter" component={CounterContainer} />
        <Route exact path="/example" component={Examples} />
        <Route exact path="/about" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/form" component={FormSample} />
      </div>
    </BrowserRouter>
  </Provider>
);
export default App;

import React from 'react';
import { Home } from './container/Home';
import About from './container/About';
import Topic from './container/Topic';
import FormSample from './container/Form';
import './scss/utils/helper.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/reducers';
import { rootSaga } from './sagas/sagas';
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
        <Route exact path="/about" component={About} />
        <Route exact path="/topic" component={Topic} />
        <Route exact path="/form" component={FormSample} />
      </div>
    </BrowserRouter>
  </Provider>
);
export default App;

import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// import the root reducer
import rootReducer from './reducers/index';

// import comments from './data/comments';
// import posts from './data/posts';

// create an object for the default data
const defaultState = {};

// Redux dev tools installation
// Install redux dev tools from chrome
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

// promise middleware
function promiseMiddleware({dispatch}) {
  function isPromise(val) {
    return val && typeof val.then === 'function';
  };
  return next => action => {
    return isPromise(action.payload)
      ? action.payload.then(
          result => dispatch({...action, payload: result}),
          error => dispatch({...action, payload: error, error: true })
        )
      : next(action);
  };
}

const createStoreWithMiddleware = applyMiddleware(logger, promiseMiddleware, thunk)(createStore);

const store = createStore(rootReducer, defaultState, enhancers);


export const history = syncHistoryWithStore(browserHistory, store);

export default createStoreWithMiddleware(rootReducer, defaultState, enhancers);
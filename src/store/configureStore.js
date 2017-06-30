import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

export default function configureStore(initialState) {
  let store = createStore(reducers, initialState,
  	applyMiddleware(
  		thunkMiddleware,
  		createLogger
  	),
    // 触发 redux-devtools
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
}
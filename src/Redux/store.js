import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk' 
import {themeReducer} from './Theme/Reducers' 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
  
const enhancer = composeEnhancers(applyMiddleware(
    thunk 
  ));

const rootReducer = combineReducers({ 
    theme: themeReducer, 
});
 

const store = createStore(
  rootReducer, 
  {},
  enhancer
);

export default store;
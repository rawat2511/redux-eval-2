import { combineReducers, applyMiddleware, compose, createStore } from "redux";
import gitReducer from "../Github/reducer";
import authReducer from "./reducer";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({auth: authReducer, git: gitReducer})
 
export const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)) );
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

//takes store as input
const logger = store => {
    return next => {
        //recives dispatched action as input, can access store, next, middleware
        return action => {
            console.log('[Middleware] dispatching', action)
            //next takes action as argument and lets the action continue to the reducer
            const result = next(action)
            console.log('[Middleware] nextstate', store.getState())
            return result
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
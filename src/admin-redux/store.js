import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './';
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const AdminStore = createStore(rootReducer, initialState, 
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

export default AdminStore;


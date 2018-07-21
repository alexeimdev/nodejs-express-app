import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from "react-router-redux";

export default function configureStore(initialState, history) {
    const sagaMiddleware = createSagaMiddleware();
    const myRouterMiddleware = routerMiddleware(history);

    return {
        store: createStore(
            rootReducer,
            initialState,
            composeWithDevTools(applyMiddleware(sagaMiddleware, myRouterMiddleware))
        ),
        runSaga: sagaMiddleware.run,
    }
}
import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const history = createHistory();
    const myRouterMiddleware = routerMiddleware(history);

    return {
        ...createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, myRouterMiddleware))),
        runSaga: sagaMiddleware.run,
        history: history
    }
}
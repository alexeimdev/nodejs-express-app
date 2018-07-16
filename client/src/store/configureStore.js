import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'


export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware))),
        runSaga: sagaMiddleware.run
    }
}
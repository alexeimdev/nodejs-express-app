import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
import fetchUsersSaga from './sagas/usersSaga';
import fetchUserSaga from './sagas/userSaga';
import { Switch, Route } from "react-router";
import { Link } from 'react-router-dom';
//import { Router, Route, BrowserRouter, browserHistory } from 'react-router-dom';

import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import initialState from './reducers/initialState';

import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import Loader from './components/Loader';
import UserDetails from './components/UserDetails';

const history = createHistory();
const { store, runSaga } = configureStore(initialState, history);

runSaga(fetchUsersSaga);
runSaga(fetchUserSaga);

store.subscribe(() => {
    console.log('store.getState', store.getState());
})

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <ul>
                    <li>
                        <a href="javascript:void(0);" onClick={() => history.goBack()}> Back </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);" onClick={() => history.goForward()}> Forward </a>
                    </li>
                    {/* <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/counter"> Counter </Link>
                    </li>
                    <li>
                        <Link to="/counter2"> Counter2 </Link>
                    </li>
                    <li>
                        <Link to="/showloader"> Show Loader </Link>
                    </li>
                    <li>
                        <Link to="/hideloader"> Hide Loader </Link>
                    </li> */}
                </ul>
                <div style={{ border: '1px solid red' }}>
                    <Route exact path="/" component={App} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/counter2" component={Counter2} />
                    <Route path="/showloader" render={() => <Loader isDisplay={true} />} />
                    <Route path="/hideloader" render={() => <Loader isDisplay={false} />} />
                </div>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);

registerServiceWorker();

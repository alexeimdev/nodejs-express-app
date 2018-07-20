import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
import fetchUsersSaga from './sagas';
import { Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import { Link } from 'react-router-dom'

import Counter from './components/Counter';
import Counter2 from './components/Counter2';

const store = configureStore();
store.runSaga(fetchUsersSaga);
const history = store.history;

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );

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
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/counter"> Counter </Link>
                    </li>
                    <li>
                        <Link to="/counter2"> Counter2 </Link>
                    </li>
                </ul>
                <div style={{ border: '1px solid red' }}>
                    <Route exact path="/" component={App} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/counter2" component={Counter2} />
                </div>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
import fetchUsersSaga from './sagas';
import { Route } from "react-router";
import { ConnectedRouter, push } from "react-router-redux";

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
          <Route exact path="/" component={App} />
          {/* <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} /> */}
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
  );

registerServiceWorker();

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHashHistory from 'history/createHashHistory';
import { Router, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { configureStore } from './store/configureStore';
import * as globalActions from './store/actions';
import './style.less';

const history = createHashHistory();
const store = configureStore();

globalActions.setGlobalSyncId(store.dispatch);

class AppRouter extends React.Component {
  render () {
    return (
      <div>
        <Provider store={ store }>
          <Router history={ history }>
            <Route exact path="/" component={ HomePage }/>
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(
  <AppRouter />,
  document.getElementById('app'),
);

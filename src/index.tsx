import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHashHistory from 'history/createHashHistory';
import { Router, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { configureStore } from './store/configureStore';
import './style.less';

const history = createHashHistory();
const store = configureStore();

class AppRouter extends React.Component {
  render (){
    return (
      <div>
        <Provider store={ store }>
          <Router history={ history }>
            <Route exact path="/" component={ MainPage }/>
          </Router>
        </Provider>  
      </div>
    )
  }
}

ReactDOM.render(
  <AppRouter />,
  document.getElementById('app'),
)
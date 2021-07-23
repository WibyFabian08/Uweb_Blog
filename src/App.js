import "./assets/css/style.css";
import {Router, Switch, Route} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import Home from './pages/Home';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';

function App() {
  const history = createBrowserHistory({
    baseName: process.env.PUBLIC_URL
  })
  
  return (
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/detail" component={Detail}></Route>
        <Route exact path="/not-found" component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;

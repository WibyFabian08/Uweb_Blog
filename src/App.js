import "./assets/css/style.css";
import {Router, Switch, Route} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import Home from './pages/Home';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import AddPost from './pages/AddPost';
import PostByTag from './pages/PostByTag';

function App() {
  const history = createBrowserHistory({
    baseName: process.env.PUBLIC_URL
  })
  
  return (
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/detail/:id" component={Detail}></Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Route path="/add" component={AddPost}></Route>
        <Route path="/posts/:tag" component={PostByTag}></Route>
      </Switch>
    </Router>
  );
}

export default App;

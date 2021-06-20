import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import Add from './Add/Add';
import Edit from './Edit/Edit';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Add'>Add</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Add" exact component={Add} />
        <Route path="/Edit/:id" exact component={Edit} />
      </Switch>
    </Router>
  );
}

export default App;

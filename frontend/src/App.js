import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Profile from './containers/Profile/Profile';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Redirect from="/" to="/home" exact />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

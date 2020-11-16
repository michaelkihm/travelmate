import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Profile from './containers/Profile/Profile';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <PrivateRoute
            exact
            path="/home"
            component={Home}
            auth={{ isLoading: false, isAuthenticated: true }}
          />
          <PrivateRoute
            exact
            path="/profile"
            component={Profile}
            auth={{ isLoading: false, isAuthenticated: true }}
          />
          <Route path="/login" exact component={Login} />
          <Redirect from="/" to="/home" exact />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

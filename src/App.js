import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import SigninPage from './pages/Signin.js';
import SignupPage from './pages/Signup.js';
import SidebarPage from './pages/Sidebar.js';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route exact path="/signin">
            <SigninPage />
          </Route>
          <Route exact path="/signup">
            <SignupPage />
          </Route>
          <Route exact path="/sidebar">
            <SidebarPage />
          </Route>
        </Switch>
    </Router>
  );
}

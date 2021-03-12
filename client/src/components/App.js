import React, { useEffect } from 'react';
import Header from './utils/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import * as actions from './actions';

import Signout from './auth/Signout';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';

const App = (props) => {
  const user = useSelector((state) => state.auth.user);
  const authenticated = useSelector((state) => state.auth.authenticated);

  useEffect(() => {
    if (authenticated) {
      props.fetchUser();
    }
  }, [authenticated, props.fetchUser]);

  return (
    <div>
      <BrowserRouter>
        <Header currentUser={user} />
        <div className="wrapper">
          <Route exact path="/" component={Welcome} />
          <Route path="/signout" component={Signout} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          {authenticated ? (
            <div>
              <Route exact path="/dashboard" component={Dashboard} />
            </div>
          ) : (
            ''
          )}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default connect(null, actions)(App);

import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './services/auth';

import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Match from './Components/Match/Match';
import Guess from './Components/Guess/Guess';
import Ranking from './Components/Ranking/Ranking';
import Regulation from './Components/Regulation/Regulation';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/bolao" component={Home} />
        <PrivateRoute exact path="/jogos" component={Match} />
        <PrivateRoute exact path="/palpites" component={Guess} />
        <PrivateRoute exact path="/regulamento" component={Regulation} />
        <PrivateRoute exact path="/classificacao" component={Ranking} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './services/auth';

import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Jogo from './Components/Jogo/Jogo';
import Palpite from './Components/Palpite/Palpite';
import Regulamento from './Components/Regulamento/Regulamento';
import Classificacao from './Components/Classificacao/Classificacao';

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
        <PrivateRoute exact path="/jogos" component={Jogo} />
        <PrivateRoute exact path="/palpites" component={Palpite} />
        <PrivateRoute exact path="/regulamento" component={Regulamento} />
        <PrivateRoute exact path="/classificacao" component={Classificacao} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

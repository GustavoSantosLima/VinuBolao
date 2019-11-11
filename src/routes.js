import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import Jogo from './Components/Jogo/Jogo';
import Palpite from './Components/Palpite/Palpite';
import Regulamento from './Components/Regulamento/Regulamento';
import Classificacao from './Components/Classificacao/Classificacao';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/jogo" component={Jogo} />
        <Route exact path="/palpite" component={Palpite} />
        <Route exact path="/regulamento" component={Regulamento} />
        <Route exact path="/classificacao" component={Classificacao} />
      </Switch>
    </BrowserRouter>
  );
}

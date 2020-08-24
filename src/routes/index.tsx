import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import PessoaJuridica from '../pages/PessoaJuridica';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/pessoajuridica/:cnpj" component={PessoaJuridica} />
  </Switch>
);

export default Routes;

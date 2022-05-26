import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import CreateAccount from './pages/CreateAccount';
import LoginPage from './pages/LoginPage';
import InitialPage from './pages/InitialPage';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/createaccount" component={CreateAccount}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/" component={InitialPage}/>
    </Switch>
  );
};

export default Routes;

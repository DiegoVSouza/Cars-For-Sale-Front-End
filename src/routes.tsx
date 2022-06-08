import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import SalesPage from './pages/SalesPage';
import MyCars from './pages/MyCars';


const Routes = (): JSX.Element => {
  return (
    <Switch>

      <Route path="/salespage" component={SalesPage} />
      <Route path="/mycars" component={MyCars} />
      <Route path="/productpage" component={ProductPage} />
      <Route path="/createaccount" component={CreateAccount}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/" component={Home} />

    </Switch>
  );
};

export default Routes;

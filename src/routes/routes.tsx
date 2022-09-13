import { Routes as Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CreateAccount from '../pages/CreateAccount';
import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage';
import SalesPage from '../pages/SalesPage';
import MyCars from '../pages/MyCars';


const Routes = (): JSX.Element => {
  return (
    <Switch>

      <Route path="/salespage" element={<SalesPage />} />
      <Route path="/mycars" element={<MyCars />} />
      <Route path="/productpage" element={<ProductPage />} />
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Home />} />

    </Switch>
  );
};

export default Routes;

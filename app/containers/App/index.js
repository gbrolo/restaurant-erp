/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Sidebar from '../../components/Sidebar/Loadable';

import UserCreationPage from '../UserCreationPage/UserCreationPage';
import Receipts from '../Receipts/Receipts';
import Inventory from '../Inventory/Inventory';
import Proveedores from '../Proveedores/Proveedores';
export default function App() {
  return (
    <div>
      <Sidebar />
      <div style={{ marginLeft: 55, padding: 55 }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/usuarios" component={UserCreationPage} />
          <Route path="/facturas" component={Receipts} />
          <Route path="/inventarios" component={Inventory} />
          <Route path="/proveedores" component={Proveedores} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  );
}

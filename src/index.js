import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductTemplate from './components/ProductTemplate/ProductTemplate.js';
import ShoppingBag from './components/ShoppingBag/ShoppingBag';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/ProductTemplate/:product" component={ProductTemplate} />
        <Route exact path="/ShoppingBag/:product" component={ShoppingBag} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


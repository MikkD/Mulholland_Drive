import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Jackets from './components/FirstSection/Products/Jackets/Jackets';
import Jeans from './components/FirstSection/Products/Jeans/Jeans';
import Pants from './components/FirstSection/Products/Pants/Pants';
import Shirts from './components/FirstSection/Products/Shirts/Shirts';
import Sneakers from './components/FirstSection/Products/Sneakers/Sneakers';
import Accessories from './components/FirstSection/Products/Accessories/Accessories';
import ProductTemplate from './components/FirstSection/Products/ProductTemplate/ProductTemplate';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/Jackets" component={Jackets} />
        <Route exact path="/Jeans" component={Jeans} />
        <Route exact path="/Pants" component={Pants} />
        <Route exact path="/Shirts" component={Shirts} />
        <Route exact path="/Sneakers" component={Sneakers} />
        <Route exact path="/Accessories" component={Accessories} />
        <Route path="/ProductTemplate/:product" component={ProductTemplate} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


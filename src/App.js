import React from 'react'
import './App.css';
import Home from './pages/Home';
import Products from './pages/products/Products';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './auth/login';
import Register from './auth/register';
import ProductDetail from './pages/products/productDetail';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/product/:id" component={ProductDetail} />
        <Redirect from="/home" to="/" />
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react'
import './App.css';
import Home from './pages/Home';
import Products from './pages/products/Products';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';




function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/" component={Home} />
      <Route exact path='/products' component={Products} />  
      <Redirect from='/home' to='/' />  
    </Switch>
    </Router>
  );
}

export default App;

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
      <Redirect from='/home' to='/' />  
      <Route exact path/> 
      <Route path='/products' component={Products} />  
    </Switch>
    </Router>
  );
}

export default App;

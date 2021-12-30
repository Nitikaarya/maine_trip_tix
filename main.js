import React from 'react';
import { HashRouter,Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Home';
import Contact from './Contact';
import About from './about'
import Features from './features'
import Pricing from './pricing'

function Main() {
  return (
    <div>
    <HashRouter>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/about' component={About}/>
      <Route path='/services' component={Features}/>
      <Route path='/pricing' component={Pricing}/>
      </Switch>
    </HashRouter>
    </div>
  );
}

export default Main;
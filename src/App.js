import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Header from './components/Header';
import Home from './Home';


const App = () => {

  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App

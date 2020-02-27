import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Welcome from './components/Welcome'
import SignIn from './components/SignIn'

function App() {
  return (
    <Router >
      <div className="App">
        <Switch>
          <Route path='/signin' component={SignIn} />
          <Route path='/' component={Welcome} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

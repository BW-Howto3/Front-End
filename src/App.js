import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Welcome from './components/Welcome'
import SignIn from './components/SignIn'
// import PrivateRoute from './components/PrivateRoute'
import About from './components/About'
import './components/App.scss'
import HowToList from './components/HowToList'

function App() {
  return (
    <>
    <Router >
    <SignIn/>
      <div className="App">
        <Switch>
          <Route path='/howto' component={HowToList} />
          <Route path='/about' component={About} />
          <Route path='/' component={Welcome} />
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;

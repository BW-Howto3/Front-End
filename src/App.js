import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./components/Welcome";
import SignIn from "./components/SignIn";
// import PrivateRoute from './components/PrivateRoute'
import About from "./components/About";
import "./components/App.scss";
import HowToList from "./components/HowToList";
import CreateHowTo from "./components/CreateHowTo";
import EditHowTo from "./components/EditHowTo";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {}, [refresh]);
  const appRefresh = () => {
    setRefresh(!refresh);
  };
  return (
    <>
      <Router>
        <SignIn appRefresh={appRefresh} />
        <div className="App">
          <Switch>
            <Route path="/create" component={CreateHowTo} />
            <PrivateRoute path="/update" component={EditHowTo} />
            <Route path="/howto" component={HowToList} />
            <Route path="/about" component={About} />
            <Route path="/" component={Welcome} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

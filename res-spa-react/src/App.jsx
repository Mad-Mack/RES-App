import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Notifications from "react-notify-toast";
import Home from "./components/home";

class App extends Component {
  render() {
    return (
      <div>
        <Notifications />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/login/loginForm";
import RegisterForm from "./components/register/registerForm";
import Home from "./components/home/home";
import { ToastContainer } from "react-toastify";
import Dashboard from "./components/shell";

class App extends Component {
  state = {
    user: {}
  };
  render() {
    return (
      <div>
        <Dashboard user={this.state.user}>
          <div className="container">
            <ToastContainer />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={LoginForm} />
              <Route path="/register" component={RegisterForm} />
            </Switch>
          </div>
        </Dashboard>
      </div>
    );
  }
}

export default App;

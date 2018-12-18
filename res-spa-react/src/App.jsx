import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/login/loginForm";
import RegisterForm from "./components/register/registerForm";
import Home from "./components/home/home";
import { ToastContainer } from "react-toastify";
import Shell from "./components/navigation/shell";

class App extends Component {
  state = {
    user: {}
  };
  render() {
    return (
      <div>
        <Shell user={this.state.user}>
          <div className="container">
            <ToastContainer />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={LoginForm} />
              <Route path="/register" component={RegisterForm} />
            </Switch>
          </div>
        </Shell>
      </div>
    );
  }
}

export default App;

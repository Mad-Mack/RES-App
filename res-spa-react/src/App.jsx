import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./components/login/loginForm";
import RegisterForm from "./components/register/registerForm";
import Home from "./components/home/home";
import { ToastContainer } from "react-toastify";
import Shell from "./components/navigation/shell";
import toastService from "./services/toastService";

class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    const user = localStorage.getItem("token");
    this.setState({ user });
  }

  getUser = () => {
    this.setState({ user: {} });
  };

  logOut = () => {
    localStorage.removeItem("token");
    this.setState({ user: null });
    toastService.success("Logout successfully");
  };
  render() {
    const { user } = this.state;
    return (
      <div>
        <Shell user={user} logOut={this.logOut}>
          <div className="container">
            <ToastContainer />
            <Switch>
              <Route
                path="/"
                exact
                render={props => {
                  if (!user) return <Redirect to="/login" />;
                  return <Home getUser={this.getUser} {...props} />;
                }}
              />
              <Route
                path="/login"
                render={props => {
                  if (user) return <Redirect to="/" />;
                  return <LoginForm getUser={this.getUser} {...props} />;
                }}
              />
              <Route
                path="/register"
                render={props => {
                  if (user) return <Redirect to="/" />;
                  return <RegisterForm {...props} />;
                }}
              />
            </Switch>
          </div>
        </Shell>
      </div>
    );
  }
}

export default App;

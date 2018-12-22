import { withSnackbar } from "notistack";
import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Companies from "./components/companies/companies";
import Home from "./components/home/home";
import LoginForm from "./components/login/loginForm";
import Shell from "./components/navigation/shell";
import RegisterForm from "./components/register/registerForm";
import authService from "./services/authService";
import { catchGlobalUnexpectedErrors } from "./services/httpService";

class App extends Component {
  state = {
    user: null,
    isLoading: false
  };

  componentDidMount() {
    this.getUser();

    catchGlobalUnexpectedErrors(() => {
      this.props.enqueueSnackbar("An unexpected error has occurred.", {
        variant: "error"
      });
    });
  }

  handleLoadingStatus = status => this.setState({ loading: true });

  getUser = () => {
    const user = authService.getCurrentUserFromJwt();
    this.setState({ user });
  };

  logOut = () => {
    const { enqueueSnackbar } = this.props;
    authService.logOut();
    this.setState({ user: null });
    enqueueSnackbar("Logout successfully", {
      variant: "success"
    });
  };
  render() {
    const { user } = this.state;
    return (
      <div>
        <Shell user={user} logOut={this.logOut}>
          <div className="container">
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
                  return <LoginForm getUser={this.getUser} isLoading={this.state.isLoading} onLoad={this.handleLoadingStatus} {...props} />;
                }}
              />
              <Route
                path="/register"
                render={props => {
                  if (user) return <Redirect to="/" />;
                  return <RegisterForm {...props} isLoading={this.state.isLoading} onLoad={this.handleLoadingStatus} />;
                }}
              />
              <Route
                path="/companies"
                render={props => {
                  if (!user) return <Redirect to="/" />;
                  return <Companies {...props} isLoading={this.state.isLoading} onLoad={this.handleLoadingStatus} />;
                }}
              />
            </Switch>
          </div>
        </Shell>
      </div>
    );
  }
}

export default withSnackbar(App);

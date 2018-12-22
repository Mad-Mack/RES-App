import { withSnackbar } from "notistack";
import React from "react";
import authService from "../../services/authService";
import AppForm from "../common/form";

class LoginForm extends AppForm {
  state = {
    data: {
      username: "",
      password: ""
    },
    isLoading: false
  };

  doSubmit = async () => {
    this.setState({ isLoading: true });
    const { data: result } = await authService.login(this.state.data);
    localStorage.setItem("token", result.token);
    this.props.enqueueSnackbar("Logged in successfully.", { variant: "success" });
    this.setState({ isLoading: false });
    this.props.getUser();
  };

  render() {
    const { username, password } = this.state.data;
    return (
      <div id="login-form" style={{ marginTop: "150px" }}>
        <div className="row">
          <div className="col-md-5 ml-auto mr-auto">
            <div className="text-center">
              <h2>Login</h2>
              <hr />
            </div>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput({
                path: "username",
                value: username,
                onChange: this.handleInputChange,
                type: "text",
                label: "Username",
                placeholder: "Username",
                outlined: true
              })}
              {this.renderInput({
                path: "password",
                value: password,
                onChange: this.handleInputChange,
                type: "password",
                label: "Password",
                placeholder: "Password",
                outlined: true
              })}

              <hr className="my-4" />

              {this.renderButton({
                label: "Sign In",
                onClick: this.handleSubmit,
                icon: null
              })}

              <hr className="my-4" />

              <p className="lead text-center" style={{ fontSize: "1rem" }}>
                Or Sign In Using
              </p>
              <div className="row">
                <div className="col-8 ml-auto mr-auto text-center">
                  {this.renderSocialMediaButton({ icon: "facebook" })}
                  {this.renderSocialMediaButton({ icon: "google" })}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withSnackbar(LoginForm);

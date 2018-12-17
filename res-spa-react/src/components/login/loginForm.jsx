import React from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
import { notify } from "react-notify-toast";
import AppForm from "../common/form";

class LoginForm extends AppForm {
  state = {
    data: {
      username: "",
      password: ""
    }
  };

  doSubmit = async () => {
    const { data: token } = await authService.login(this.state.data);
    localStorage.setItem("token", token);
    notify.show("Logged in successfully.", "success");
  };

  render() {
    const { username, password } = this.state.data;
    return (
      <div id="login-form" style={{ marginTop: "150px" }}>
        <div className="row">
          <div class="col-md-5 ml-auto mr-auto">
            <div class="text-center">
              <h2>Login</h2>
              <hr />
            </div>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("username", username, this.handleInputChange, "text", "Username", "Username", true)}
              {this.renderInput("password", password, this.handleInputChange, "password", "Password", "Password", true)}

              {this.renderButton("Sign In", this.handleSubmit, null, "btn btn-primary btn-lg btn-block")}
              <hr className="my-4" />
              <p className="lead text-center" style={{ fontSize: "1rem" }}>
                Or Sign In Using
              </p>
              <div className="row">
                <div className="col-8 ml-auto mr-auto text-center">
                  {this.renderSocialMediaButton("facebook")}
                  {this.renderSocialMediaButton("google", null, {
                    fontSize: "17px"
                  })}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;

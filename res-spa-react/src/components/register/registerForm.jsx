import React from "react";
import { Link } from "react-router-dom";
import userService from "../../services/userService";
import { notify } from "react-notify-toast";
import AppForm from "../common/form";
import Joi from "joi-browser";

class RegisterForm extends AppForm {
  state = {
    data: {
      userName: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      middleName: "",
      confirmPassword: ""
    },
    errors: {}
  };

  schema = {
    userName: Joi.string()
      .required()
      .min(2)
      .max(50)
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password"),
    confirmPassword: Joi.string().required(),
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    firstName: Joi.string()
      .required()
      .label("First Name"),
    lastName: Joi.string()
      .required()
      .label("Last Name"),
    middleName: Joi.string()
      .optional()
      .allow("")
      .required()
      .label("Middle Name")
  };

  doSubmit = async () => {
    if (this.state.data.password !== this.state.data.confirmPassword) return notify.show("Please fill out the fields properly.", "error");
    await userService.register(this.state.data);
    notify.show("Registered successfully.", "success");
    this.props.history.push("/login");
  };

  render() {
    const { data: user } = this.state;
    return (
      <div style={{ marginTop: "20px" }}>
        <div className="row">
          <div class="col-md-5 ml-auto mr-auto">
            <div class="text-center">
              <h2>Register</h2>
              <hr />
            </div>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("userName", user.userName, this.handleInputChange, "text", "Username", "Enter username", null)}
              {this.renderInput("email", user.email, this.handleInputChange, "email", "Email", "Enter email", null)}
              <br />
              {this.renderInput("firstName", user.firstName, this.handleInputChange, "text", "First Name", "Enter first name", null)}
              {this.renderInput("middleName", user.middleName, this.handleInputChange, "text", "Middle Name", "Enter middle mame", null)}
              {this.renderInput("lastName", user.lastName, this.handleInputChange, "text", "Last Name", "Enter last name", null)}
              <br />
              {this.renderInput("password", user.password, this.handleInputChange, "password", "Password", "Enter password", null)}
              {this.renderInput("confirmPassword", user.confirmPassword, this.handleInputChange, "password", "Confirm Password", "Confirm Password", null)}

              <hr className="my-4" />
              {this.renderButton("Sign Up", this.handleSubmit, null, "btn btn-primary btn-lg btn-block")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;

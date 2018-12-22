import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Joi from "joi-browser";
import { withSnackbar } from "notistack";
import React from "react";
import userService from "../../services/userService";
import AppForm from "../common/form";

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
    errors: {},
    showPassword: false,
    showConfirmPassword: false,
    isLoading: false
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
    if (this.state.data.password !== this.state.data.confirmPassword)
      return this.props.enqueueSnackbar.error("Please fill out the fields properly.", {
        variant: "error"
      });
    this.setState({ isLoading: true });
    await userService.register(this.state.data);
    this.props.enqueueSnackbar("Registered successfully.", { variant: "success" });
    this.setState({ isLoading: false });
    this.props.history.push("/login");
  };

  handleShowPassword = () => this.setState(prevState => ({ showPassword: !prevState.showPassword }));

  handleShowConfirmPassword = () => this.setState(prevState => ({ showConfirmPassword: !prevState.showConfirmPassword }));

  render() {
    const { data: user } = this.state;
    return (
      <div style={{ marginTop: "150px" }}>
        <div className="row">
          <div className="col-md-8 ml-auto mr-auto">
            <div className="text-center">
              <h2>Register</h2>
              <hr />
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  {this.renderInput({
                    path: "userName",
                    value: user.userName,
                    onChange: this.handleInputChange,
                    type: "text",
                    label: "Username*",
                    placeholder: "Enter username...",
                    error: this.state.errors["userName"],
                    outlined: true
                  })}
                </div>
                <div className="col-md-6 col-sm-12">
                  {this.renderInput({
                    path: "email",
                    value: user.email,
                    onChange: this.handleInputChange,
                    type: "email",
                    label: "Email*",
                    placeholder: "Enter email...",
                    error: this.state.errors["email"],
                    outlined: true
                  })}
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  {this.renderInput({
                    path: "firstName",
                    value: user.firstName,
                    onChange: this.handleInputChange,
                    label: "First Name*",
                    error: this.state.errors["firstName"],
                    placeholder: "Enter first name...",
                    outlined: true
                  })}
                </div>
                <div className="col-md-4 col-sm-12">
                  {this.renderInput({
                    path: "middleName",
                    value: user.middleName,
                    onChange: this.handleInputChange,
                    error: this.state.errors["middleName"],
                    label: "Middle Name",
                    placeholder: "Enter middle name...",
                    outlined: true
                  })}
                </div>
                <div className="col-md-4 col-sm-12">
                  {this.renderInput({
                    path: "lastName",
                    value: user.lastName,
                    onChange: this.handleInputChange,
                    error: this.state.errors["lastName"],
                    label: "Last Name*",
                    placeholder: "Enter last name...",
                    outlined: true
                  })}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  {this.renderInput({
                    path: "password",
                    value: user.password,
                    onChange: this.handleInputChange,
                    type: `${this.state.showPassword ? "text" : "password"}`,
                    error: this.state.errors["password"],
                    label: "Password*",
                    icon: {
                      position: "end",
                      component: (
                        <IconButton aria-label="Toggle password visibility" onClick={this.handleShowPassword}>
                          {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      )
                    },
                    placeholder: "Enter password...",
                    outlined: true
                  })}
                </div>
                <div className="col-md-6 col-sm-12">
                  {this.renderInput({
                    path: "confirmPassword",
                    error: this.state.errors["confirmPassword"],
                    value: user.confirmPassword,
                    onChange: this.handleInputChange,
                    type: `${this.state.showConfirmPassword ? "text" : "password"}`,
                    label: "Confirm Password*",
                    icon: {
                      position: "end",
                      component: (
                        <IconButton aria-label="Toggle password visibility" onClick={this.handleShowConfirmPassword}>
                          {this.state.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      )
                    },
                    placeholder: "Confirm password...",
                    outlined: true
                  })}
                </div>
              </div>

              <br />
              {this.renderButton({
                label: "Sign Up",
                onClick: this.handleSubmit,
                icon: null,
                variant: "contained"
              })}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withSnackbar(RegisterForm);

import React from "react";
import { Link } from "react-router-dom";
import userService from "../services/userService";
import { notify } from "react-notify-toast";
import AppForm from "./common/form";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
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
    if (this.state.data.password !== this.state.data.confirmPassword)
      return notify.show("Please fill out the fields properly.", "error");
    await userService.register(this.state.data);
    notify.show("Registered successfully.", "success");
    this.props.history.push("/login");
  };

  render() {
    const { data: user } = this.state;
    return (
      <div className="register-form">
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 900 }}>
            <Header as="h2" color="teal" textAlign="center">
              Create an account
            </Header>
            <Form size="large" onSubmit={this.handleSubmit} error>
              <Segment stacked>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    name="firstName"
                    value={user.firstName}
                    onChange={this.handleInputChange}
                    label="First Name"
                    placeholder="First Name"
                    error={!!this.state.errors["firstName"]}
                  />

                  <Form.Input
                    fluid
                    name="middleName"
                    value={user.middleName}
                    onChange={this.handleInputChange}
                    label="Middle Name"
                    placeholder="Middle Name"
                    error={!!this.state.errors["middleName"]}
                  />
                  <Form.Input
                    fluid
                    label="Last Name"
                    placeholder="Last Name"
                    name="lastName"
                    value={user.lastName}
                    onChange={this.handleInputChange}
                    error={!!this.state.errors["lastName"]}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Username"
                    placeholder="Username"
                    name="userName"
                    value={user.userName}
                    onChange={this.handleInputChange}
                    error={!!this.state.errors["userName"]}
                  />
                  <Form.Input
                    fluid
                    label="Email"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={this.handleInputChange}
                    error={!!this.state.errors["email"]}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="Password"
                    name="password"
                    value={user.password}
                    onChange={this.handleInputChange}
                    placeholder="Password"
                    type="password"
                    error={!!this.state.errors["password"]}
                  />
                  <Form.Input
                    fluid
                    label="Confirm Password"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={this.handleInputChange}
                    placeholder="Confirm Password"
                    type="password"
                    error={
                      this.state.data.password !==
                      this.state.data.confirmPassword
                    }
                  />
                </Form.Group>
                <hr />
                <div className="row">
                  <div className="col-11 ml-auto mr-auto">
                    <Button color="teal" fluid size="large">
                      Register
                    </Button>
                  </div>
                </div>
              </Segment>
            </Form>
            <Message>
              Already have an account? <Link to="/login"> Login</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default RegisterForm;

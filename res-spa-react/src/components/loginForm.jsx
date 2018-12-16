import React from "react";
import { Link } from "react-router-dom";
import authService from "../services/authService";
import { notify } from "react-notify-toast";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import AppForm from "./common/form";

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
      <div className="login-form">
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Log-in to your account
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={this.handleInputChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={this.handleInputChange}
                />

                <Button color="teal" fluid size="large">
                  Login
                </Button>

                <hr />
                <Button
                  circular
                  color="facebook"
                  size="large"
                  icon="facebook f"
                />
                <Button circular color="twitter" icon="twitter" size="large" />
                <Button
                  circular
                  color="google plus"
                  icon="google"
                  size="large"
                />
              </Segment>
            </Form>
            <Message>
              New to us? <Link to="/register">Sign Up!</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LoginForm;

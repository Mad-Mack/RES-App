import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../services/authService";
import { notify } from "react-notify-toast";

class LoginForm extends Component {
   state = {
      data: {
         username: "",
         password: ""
      },
      remembered: false
   };
   handleInputChange = ({ currentTarget: input }) => {
      const user = { ...this.state.data };
      user[input.name] = input.value;
      this.setState({ data: user });
   };

   handleSubmit = async e => {
      e.preventDefault();
      try {
         const { data: token } = await authService.login(this.state.data);
         localStorage.setItem("token", token);
         notify.show("Logged in successfully.", "success");
      } catch (ex) {
         if (ex.response) notify.show(ex.response.data.error, "error");
         else notify.show(ex.message, "error");
      }
   };
   render() {
      const { username, password } = this.state.data;
      return (
         <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
               <div className="card card-signin my-5">
                  <div className="card-body">
                     <h5 className="card-title text-center">Sign In</h5>
                     <form className="form-signin" onSubmit={this.handleSubmit}>
                        <div className="form-label-group">
                           <input name="username" value={username} onChange={this.handleInputChange} className="form-control" placeholder="Username" autoFocus />
                        </div>

                        <div className="form-label-group">
                           <input type="password" name="password" value={password} onChange={this.handleInputChange} className="form-control input-rounded" placeholder="Password" />
                        </div>

                        <div className="custom-control custom-checkbox mb-3">
                           <input type="checkbox" className="custom-control-input" id="rememberMeCheckbox" />
                           <label className="custom-control-label" htmlFor="rememberMeCheckbox">
                              Remember password
                           </label>
                        </div>
                        <button className="btn  btn-primary btn-block text-uppercase" type="submit">
                           Sign in
                        </button>
                        <Link to="/register" className="d-block text-center mt-2 small">
                           Do not have an account? Register now!
                        </Link>
                        <hr className="my-4" />
                        <button className="btn  btn-google btn-block text-uppercase" type="submit">
                           <i className="fa fa-google mr-2" /> Sign in with Google
                        </button>
                        <button className="btn  btn-facebook btn-block text-uppercase" type="submit">
                           <i className="fa fa-facebook-f mr-2" /> Sign in with Facebook
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default LoginForm;

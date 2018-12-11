import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../services/userService";
import { notify } from "react-notify-toast";

class RegisterForm extends Component {
   state = {
      data: {
         userName: "",
         password: "",
         email: "",
         firstName: "",
         lastName: "",
         middleName: ""
      }
   };

   handleInputChange = ({ currentTarget: input }) => {
      const user = { ...this.state.data };
      user[input.name] = input.value;
      this.setState({ data: user });
   };

   handleSubmit = async e => {
      e.preventDefault();
      try {
         const { data: createdUser } = await userService.register(this.state.data);
         console.log(createdUser);
         notify.show("Registered successfully.", "success");
         this.props.history.push("/login");
      } catch (ex) {
         if (ex.response) notify.show(ex.response.data.errors[0], "error");
         else notify.show(ex.message, "error");
      }
   };

   render() {
      const { data: user } = this.state;
      return (
         <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
               <div className="card card-signin flex-row my-5">
                  <div className="card-img-left d-none d-md-flex" />
                  <div className="card-body">
                     <h5 className="card-title text-center">Register</h5>
                     <form className="form-signin" onSubmit={this.handleSubmit}>
                        <div className="form-label-group">
                           <input type="text" name="userName" className="form-control" placeholder="Username" value={user.userName} onChange={this.handleInputChange} />
                        </div>

                        <div className="form-label-group">
                           <input type="email" name="email" className="form-control" placeholder="Email address" value={user.email} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-label-group">
                           <input type="text" name="firstName" className="form-control" placeholder="First Name" value={user.firstName} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-label-group">
                           <input type="text" name="lastName" className="form-control" placeholder="Last Name" value={user.lastName} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-label-group">
                           <input type="text" name="middleName" className="form-control" placeholder="Middle Name" value={user.middleName} onChange={this.handleInputChange} />
                        </div>

                        <div className="form-label-group">
                           <input type="password" name="password" className="form-control" placeholder="Password" value={user.password} onChange={this.handleInputChange} />
                        </div>

                        {/* <div className="form-label-group">
                           <input type="password" name="confirmPassword" className="form-control" placeholder="Confirm Password" />
                        </div> */}

                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
                           Register
                        </button>
                        <Link to="/login" className="d-block text-center mt-2 small">
                           Sign In
                        </Link>
                        <hr className="my-4" />
                        <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit">
                           <i className="fa fa-google mr-2" /> Sign up with Google
                        </button>
                        <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit">
                           <i className="fa fa-facebook-f mr-2" /> Sign up with Facebook
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default RegisterForm;

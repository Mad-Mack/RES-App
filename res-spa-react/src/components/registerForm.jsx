import React, { Component } from "react";
import { Link } from "react-router-dom";

class RegisterForm extends Component {
   state = {
      data: {
         username: "",
         password: "",
         email: "",
         firstName: "",
         lastName: "",
         middleName: "",
         jobTitle: "",
         website: "",
         contactNumbers: []
      }
   };
   render() {
      return (
         <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
               <div className="card card-signin flex-row my-5">
                  <div className="card-img-left d-none d-md-flex" />
                  <div className="card-body">
                     <h5 className="card-title text-center">Register</h5>
                     <form className="form-signin">
                        <div className="form-label-group">
                           <input type="text" name="username" className="form-control" placeholder="Username" autoFocus />
                        </div>

                        <div className="form-label-group">
                           <input type="email" name="email" className="form-control" placeholder="Email address" />
                        </div>

                        <hr />

                        <div className="form-label-group">
                           <input type="password" name="password" className="form-control" placeholder="Password" />
                        </div>

                        <div className="form-label-group">
                           <input type="password" name="confirmPassword" className="form-control" placeholder="Confirm Password" />
                        </div>

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

import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginForm extends Component {
   state = {};
   render() {
      return (
         <div className="row" style={{ marginTop: "200px" }}>
            <div className="col-3 ml-auto mr-auto">
               <div class="ui middle aligned center aligned grid">
                  <div class="column">
                     <h2 class="ui teal image header">
                        <div class="content">Log-in to your account</div>
                     </h2>
                     <form class="ui large form">
                        <div class="ui stacked segment">
                           <div class="field">
                              <div class="ui left icon input">
                                 <i class="user icon" />
                                 <input type="text" name="email" placeholder="E-mail address" />
                              </div>
                           </div>
                           <div class="field">
                              <div class="ui left icon input">
                                 <i class="lock icon" />
                                 <input type="password" name="password" placeholder="Password" />
                              </div>
                           </div>
                           <div class="ui fluid large teal submit button">Login</div>
                        </div>

                        <div class="ui error message" />
                     </form>

                     <div class="ui message">
                        New to us? <Link to="/register">Sign Up</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default LoginForm;

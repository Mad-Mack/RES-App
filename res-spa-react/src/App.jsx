import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/loginForm";
import NavBar from "./components/navBar";
import RegisterForm from "./components/registerForm";

class App extends Component {
   render() {
      return (
         <div>
            <NavBar />
            <div className="container">
               <Switch>
                  <Route path="/login" component={LoginForm} />
                  <Route path="/register" component={RegisterForm} />
               </Switch>
            </div>
         </div>
      );
   }
}

export default App;

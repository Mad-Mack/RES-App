import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/login/loginForm";
import RegisterForm from "./components/register/registerForm";
import Notifications from "react-notify-toast";
import Home from "./components/home/home";
import NavBar from "./components/navBar/navBar";

class App extends Component {
   render() {
      return (
         <div>
            <NavBar />
            <Notifications />
            <div className="container">
               <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/login" component={LoginForm} />
                  <Route path="/register" component={RegisterForm} />
               </Switch>
            </div>
         </div>
      );
   }
}

export default App;

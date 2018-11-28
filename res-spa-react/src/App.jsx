import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/loginForm";

class App extends Component {
   render() {
      return (
         <div>
            <Switch>
               <Route path="/login" component={LoginForm} />
            </Switch>
         </div>
      );
   }
}

export default App;

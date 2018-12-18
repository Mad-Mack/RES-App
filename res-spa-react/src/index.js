import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import cyan from "@material-ui/core/colors/cyan";
import "./index.css";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";

const theme = createMuiTheme({
   palette: {
      primary: teal,
      secondary: {
         light: "#FAFAFA",
         main: "#F5F5F5",
         dark: "#EEEEEE",
         contrastText: teal
      }
   }
});

ReactDOM.render(
   <BrowserRouter>
      <MuiThemeProvider theme={theme}>
         <App />
      </MuiThemeProvider>
   </BrowserRouter>,
   document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

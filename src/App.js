import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./containers/Header";
import Home from "./containers/Home";
import Footer from "./components/Footer";

import "./style/base.css";

class App extends Component {
  render = () => {
    return (
      <div>
        <MuiThemeProvider>
          <BrowserRouter>
            <div className="container">
              <Header />
              <Route exact={true} path="/" component={Home} />
              <Footer />
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  };
}

export default App;

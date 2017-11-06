import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./containers/Header";
import Home from "./containers/Home";
import About from "./containers/About";
import Footer from "./components/Footer";

import "./style/base.css";

class App extends Component {
  render = () => {
    return (
      <div>
        <MuiThemeProvider>
          <HashRouter>
            <div className="container">
              <Header />
              <Route exact={true} path="/" component={Home} />
              <Route exact={true} path="/about" component={About} />
              <Footer />
            </div>
          </HashRouter>
        </MuiThemeProvider>
      </div>
    );
  };
}

export default App;

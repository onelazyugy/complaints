import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../media/logo.svg';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    console.log('Header page props:', this.props);
  }

  render = () => {
    return (
      <div>
        <AppBar
          title="Complaints"
          iconElementLeft={<Link to={"/"}><img src={logo} className="App-logo" alt="logo" /></Link>}
          iconElementRight={<FlatButton label="Login" />}
        />
      </div>
    );
  }
}

export default connect(null, null)(Header);

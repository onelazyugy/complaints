import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    console.log('Home page props:', this.props);
  }

  render = () => {
    return (
      <div>
        <h4>Complaints App Home Page</h4>
      </div>
    );
  };
}

export default connect(null, null)(Home);

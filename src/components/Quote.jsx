import React, { Component } from "react";

class Quote extends Component {
  render() {
    return <p className="quote">{this.props.quote}</p>;
  }
}

export default Quote;

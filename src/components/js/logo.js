import React, { Component } from 'react';
import logo from '.././images/Logo.svg';
import '.././css/logo.css'

class Logotype extends Component {
  render () {
    return (
      <div className="logo__container" onLoad = { this.props.LoadDefaultTickets } >
        <img src={ logo } alt="avasales logotype" />
      </div>
    )
  }
}

export default Logotype;

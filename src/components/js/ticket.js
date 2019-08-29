import React, { Component } from 'react';
import '.././css/ticket.css';
//import props from '';

class Ticket extends Component {

  render () {
    const {tickets} = this.props
    const ticketBlock =
      <div className="ticket__block">

        <div className="ticket__header">
          <div className="ticket__price">{}</div>
          <div className="ticket__complogo">{}</div>
        </div>

        <div className="ticket__options">
          <div className="ticket__route"></div>
          <div className="ticket__duration"></div>
          <div className="ticket__stops"></div>
        </div>

        <div className="ticket__options">
          <div className="ticket__route"></div>
          <div className="ticket__duration"></div>
          <div className="ticket__stops"></div>
        </div>

      </div>

    return (
      <div className="ticket__container">
        {ticketBlock}
      </div>

//here will be a fn

    )
  }
}

export default Ticket;

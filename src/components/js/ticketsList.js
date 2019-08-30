import React from 'react'
import '.././css/ticket.css';


function TicketsList ( props ) {
  let ticketData = [];
  for (let i = 0; i < props.tickets.length; i++) {
    let { price, carrier, segments: [ { origin, destination, duration, date, stops: stops1 }, { origin:origin2, destination:destination2, duration:duration2, date:date2, stops: stops2 }] } = props.tickets[i];

    const $stops1 = [];
    for (var k = 0; k < stops1.length; k++) {
      $stops1.push(stops1[`${k}`])
    }

    const $stops2 = [];
    for (var k = 0; k < stops2.length; k++) {
      $stops2.push(stops2[`${k}`])
    }

    const carrierLogo = `http://pics.avs.io/99/36/${ carrier }.png`

    ticketData.push(
      <li className="ticket__list-element" key={ i }>

          <div className="ticket__block">
            <div className="ticket__header">
              <div className="ticket__price">{ price }</div>
              <div className="ticket__complogo"><img src={ carrierLogo } /></div>
            </div>

            <div className="ticket__options">
              <div className="ticket__route">{ origin } - { destination }</div>
              <div className="ticket__duration">{ duration }</div>
              <div className="ticket__stops"> { $stops1.join(', ') }</div>
            </div>

            <div className="ticket__options">
              <div className="ticket__route">{ origin2 } - { destination2 }</div>
              <div className="ticket__duration">{ duration2 }</div>
              <div className="ticket__stops">{ $stops2.join(', ') }</div>
            </div>
          </div>

      </li>
    );
  }

  return(
    <div className="ticket__container" >
      <ul className="ticket__list" >
        { ticketData }
      </ul>
    </div>
  )
}

export default TicketsList;
//{ price, carrier, segments: [ { origin, destination, duration, stops: [ first, second, third ] } ] } = props.tickets[i]; // working

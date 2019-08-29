import React from 'react'
import Ticket from './ticket.js'


function TicketsList ( props ) {
  console.log(props.tickets);
  let ticketData = props.tickets.map( ({ price, carrier }, index) => {
    return <li key={index}> { price } { carrier } </li>
  })
  return(
    <ul>
      { ticketData }
    </ul>
  )
}

export default TicketsList;

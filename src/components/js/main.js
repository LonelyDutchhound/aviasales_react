import React from 'react';
import Logotype from './logo.js'
import Filter from './filter.js'
import Tabs from './tabs.js'
import Ticket from './ticket.js'
import '.././css/main.css';
import ticketload from '.././utils/ticketload.js';

function Main () {
  return (
    <div className="main">
      <Logotype />
      <Filter />
      <Tabs />
      <Ticket tickets={showTicketsData} />
    </div>
  )
}

export default Main;

function showTicketsData () {
  ticketload.then( data => {
  console.log(data);
  let fiveTickets = data.tickets.slice(0, 5);
    console.log(fiveTickets);
    return fiveTickets;
    }
  )
}

showTicketsData ();

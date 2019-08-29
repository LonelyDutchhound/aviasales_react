import React, {Component} from 'react';
import Logotype from './logo.js'
import Filter from './filter.js'
import Tabs from './tabs.js'
import TicketsList from './ticketsList.js'
import '.././css/main.css';
import ticketload from '../utils/ticketload.js';

class Main extends Component {
  state = {
    tickets: []
  }
  FilterTickets = async () => {
    const data = await ticketload;
    let fiveTickets = data.tickets.slice(0, 5);
      //console.log(fiveTickets);
    this.setState({ tickets: fiveTickets })
  };
  render () {
    return (
      <div className="main">
        <Logotype />
        <Filter />
        <Tabs FilterTickets={ this.FilterTickets }/>
        <TicketsList tickets={ this.state.tickets } />
      </div>
    )
  }
}

export default Main;

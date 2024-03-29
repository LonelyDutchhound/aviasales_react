import React, {Component} from 'react';
import Logotype from './logo.js'
import Filter from './filter.js'
import Tabs from './tabs.js'
import TicketsList from './ticketslist.js'
import '.././css/main.css';
import ticketload from '../utils/ticketload.js';

class Main extends Component {
  state = {
    tickets: []
  };

  constructor() {
    super();
    this.onClick = this.FilterTickets.bind(this);
  };

  LoadDefaultTickets = async () => {
      const data = await ticketload;
      let setTickets = data.tickets.slice(0, 5);
      this.setState({ tickets: setTickets });
    console.log(this.tickets);
  };

  FilterTickets = async (event) => {
    const { id } = event.target;
    const data = await ticketload;

    let fiveTickets;

      switch (id) {
        case 'cheapest':
          fiveTickets = data.tickets.sort( (a, b) => a.price - b.price ).slice( 0, 5 );
          break;
        case 'fastest':
          fiveTickets = data.tickets.sort( (a, b) => {
            return  a.segments.reduce( function ( acc, { duration } ) { return acc + duration }, 0)
            - b.segments.reduce( function (acc, { duration } ) { return acc + duration }, 0)
            } )
            .slice( 0, 5 );
          break;
        default:
          fiveTickets = data.tickets.sort( (a, b) => a.price - b.price ).slice( 0, 5 );
        /*case 'all':
          fiveTickets = data.tickets.slice(0, 5);
          break;
        case 'nostops':
          fiveTickets = data.tickets.slice(0, 5);
          break;
        case 'onestop':
          fiveTickets = data.tickets.slice(0, 5);
          break;
        case 'twostops':
          fiveTickets = data.tickets.slice(0, 5);
          break;
        case 'threestops':
          fiveTickets = data.tickets.slice(0, 5);
          break;*/
      }

    this.setState({ tickets: fiveTickets })
  };

  componentDidMount() {
    this.LoadDefaultTickets ();
  };

  render () {

    return (
      <div className="main" >
        <Logotype />
        <Filter FilterTickets = { this.FilterTickets } />
        <Tabs FilterTickets = { this.FilterTickets } />
        <TicketsList tickets = { this.state.tickets } />
      </div>
    )
  }
}

export default Main;

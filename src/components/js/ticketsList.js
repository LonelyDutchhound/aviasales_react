import React from 'react'
import '.././css/ticket.css';


function TicketsList ( props ) {

const ticketBlock = props.tickets.map(({ price, carrier, segments }, index) => {
  const carrierLogo = `http://pics.avs.io/99/36/${ carrier }.png`

  return (

    <li className="ticket__list-element" key={ index }>

      <div className="ticket__block">
        <div className="ticket__header">
          <div className="ticket__price">{ price }</div>
          <div className="ticket__complogo"><img src={ carrierLogo } alt="company logo" /></div>
        </div>

        { Object.values(segments).map( ({ date, destination, duration, origin, stops}, index) => {

          const durHours = Math.floor(duration/60);
          const durMin = duration - Math.floor(duration/60)*60;

          let changes, stopNames;
          switch (Object.values(stops).length) {
            case 0:
              changes = 'без пересадок';
              stopNames = ' ';
              break;
            case 1:
              changes = 'пересадка';
              stopNames = Object.values(stops).length;
              break;
            default:
              changes = 'пересадки';
              stopNames = Object.values(stops).length;
          }


            return (
              <div className="ticket__options">
                <div className="ticket__route">
                  <div className="ticket__segments-row1">
                    { origin } - { destination }
                  </div>
                  <div className="ticket__segments-row2">
                    { date }
                  </div>
                </div>
                <div className="ticket__duration">
                  <div className="ticket__segments-row1">
                    <span> в пути </span>
                  </div>
                  <div className="ticket__segments-row2 durHoursMins">
                    { durHours } ч { durMin } м
                  </div>
                </div>

                <div className="ticket__stops">
                  <div className="ticket__segments-row1">
                    <span> { stopNames } { changes } </span>
                  </div>
                  <div className="ticket__segments-row2">
                    { Object.values(stops).join(', ') }
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </li>
  )
});

  return(
    <div className="ticket__container">
      <ul className="ticket__list" >
        { ticketBlock }
      </ul>
    </div>
  )
}

export default TicketsList;

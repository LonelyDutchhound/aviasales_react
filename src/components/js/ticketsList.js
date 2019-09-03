import React from 'react'
import '.././css/ticketlist.css';


function TicketsList (props) {
    const ticketBlock = props.tickets.map(({price, carrier, segments}, index) => {
       const carrierLogo = `http://pics.avs.io/99/36/${carrier}.png`;
            return (

                <li className="ticket__list-element" key={index}>

                    <div className="ticket__block">
                        <div className="ticket__header">
                            <div className="ticket__price"><span> {price.toLocaleString()} р </span></div>
                            <div className="ticket__complogo"><img src={carrierLogo} alt="company logo"/></div>
                        </div>

                        {Object.values(segments).map(({date, destination, duration, origin, stops}) => {

                            const durHours = Math.floor(duration / 60);
                            const durMin = duration - Math.floor(duration / 60) * 60;

                            //const depLand =

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
                            const depTime = new Date(date).toLocaleTimeString('ru-RU').substring(0, 5);


                            return (
                                <div className="ticket__options" key={date}>
                                    <div className="ticket__route">
                                        <div className="ticket__segments-row1">
                                            <span> {origin} - {destination} </span>
                                        </div>
                                        <div className="ticket__segments-row2">
                                            <span> {depTime} - {} </span>
                                        </div>
                                    </div>
                                    <div className="ticket__duration">
                                        <div className="ticket__segments-row1">
                                            <span> в пути </span>
                                        </div>
                                        <div className="ticket__segments-row2 durHoursMins">
                                            <span> {durHours} ч {durMin} м </span>
                                        </div>
                                    </div>

                                    <div className="ticket__stops">
                                        <div className="ticket__segments-row1">
                                            <span> {stopNames} {changes} </span>
                                        </div>
                                        <div className="ticket__segments-row2">
                                            <span> {Object.values(stops).join(', ')} </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </li>
            )
        });

    return (

        <div className="ticket__container">
            <ul className="ticket__list">
                {ticketBlock}
            </ul>
        </div>
    )
}

export default TicketsList;


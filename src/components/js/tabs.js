import React, { Component } from 'react';
import '.././css/tabs.css';

class Tabs extends Component {
  
  render () {
    return (
      <div className="tabs__container">
        <form className="tabs__form" action="switch">


          <div className="radio__container">
          <input type="radio" className="radio__button" name="tab" id="cheapest" onChange={ this.props.FilterTickets } defaultChecked />
            <label className="radio__label cheapest" htmlFor="cheapest">
              самый дешевый
            </label>
          </div>


          <div className="radio__container">
          <input type="radio" className="radio__button" name="tab" id="fastest" onChange={ this.props.FilterTickets } />
            <label className="radio__label  fastest" htmlFor="fastest">
              самый быстрый
            </label>
          </div>

        </form>
      </div>
    );
  }
}

export default Tabs;

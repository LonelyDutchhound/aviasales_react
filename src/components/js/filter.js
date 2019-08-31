import React, { Component } from 'react';
import picker from '.././images/Shape.png';
import cursor from '.././images/Cursor.svg';
import '.././css/filter.css'

class Filter extends Component {

  render () {
    return (
      <div className="filter__container">
        <form className ="filter__form" action="filter">

        <div className="filter__multioptions">

            <div className="filter__option-title">
              <p>количество пересадок</p>
            </div>

            <div className="filter__option">
              <label className="filter__option-text" htmlFor="all">
              <input className="checkbox_hidden" type = "checkbox" id="all" onChange={ this.props.FilterTickets } />
                <div className="option__flag"></div>
                <span>Все</span>
              </label>
            </div>

            <div className="filter__option">
              <label className="filter__option-text" htmlFor="nostops">
              <input className="checkbox_hidden" type = "checkbox" id="nostops" onChange={ this.props.FilterTickets } />
                <div className="option__flag"></div>
                <span>Без пересадок</span>
              </label>
            </div>

            <div className="filter__option">

              <label className="filter__option-text" htmlFor="onestop">
                <input className="checkbox_hidden" type = "checkbox" id="onestop" onChange={ this.props.FilterTickets } />
                <div className="option__flag"></div>
                <span>1 пересадка</span>
              </label>
            </div>

            <div className="filter__option">
              <label className="filter__option-text" htmlFor="twostops">
              <input className="checkbox_hidden" type = "checkbox" id="twostops" onChange={ this.props.FilterTickets } />
                <div className="option__flag"></div>
                <span>2 пересадки</span>
              </label>
            </div>

            <div className="filter__option">
              <label className="filter__option-text" htmlFor="threestops">
              <input className="checkbox_hidden" type = "checkbox" id="threestops" onChange={ this.props.FilterTickets } />
                <div className="option__flag"></div>
                <span>3 пересадки</span>
              </label>
            </div>

          </div>

        </form>
      </div>
    )
  }
}

export default Filter;

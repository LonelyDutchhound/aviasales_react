import React from 'react';
import logo from '.././images/Logo.svg';
import '.././css/logo.css'

function Logotype () {
  return (
    <div className="logo__container">
      <img src={ logo } alt="avasales logotype"/>
    </div>
  )
}

export default Logotype;

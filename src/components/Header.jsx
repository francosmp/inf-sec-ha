import React from 'react';
import logo from '../images/logo.svg';

function Header() {
  return (
    <div className="cabecera">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><code>Seguridad Informática - Alta Disponibilidad</code></p>
        <a className="App-link" href="https://reactjs.org"
          target="_blank" rel="noopener noreferrer">
          Aprende React
        </a>
      </header>
    </div>
  );
}

export default Header;

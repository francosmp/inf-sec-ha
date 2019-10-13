import React from 'react';
import '../css/App.css';
import Cabecera from './Header.jsx';
import Cuerpo from './Body.jsx';
import Pies from './Footer.jsx';

function App() {
  return (
    <div className="App">
      <Cabecera />
      <Cuerpo />
      <Pies />
    </div>
  );
}

export default App;

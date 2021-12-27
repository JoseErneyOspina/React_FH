import React from 'react';
import ReactDOM from 'react-dom';
//Styles
import './styles/styles.scss';
// Components
import {JournalApp} from "./JournalApp";

ReactDOM.render(
  <React.StrictMode>
    <JournalApp />
  </React.StrictMode>,
  document.getElementById('root')
);

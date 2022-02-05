import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const notes = [
  { noteName: 'Do', description: 'doooooooooooooo' },
  { noteName: 'Re', description: 'reeeeeeeeeeeeee' },
  { noteName: 'Me', description: 'meeeeeeeeeeeeee' }
];

ReactDOM.render(<Accordion notes={notes} />, document.querySelector('#root'));

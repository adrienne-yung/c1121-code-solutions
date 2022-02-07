import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const bbYoda = [
  { name: 'soup', url: 'http://geekxgirls.com/images/_articles2/baby-yoda-chibi-art-01.jpg' },
  { name: 'force', url: 'https://i.pinimg.com/originals/20/c9/ce/20c9cec37c55a4d0f2f751a500001a5a.jpg' },
  { name: 'ball', url: 'https://i.pinimg.com/originals/30/6d/7c/306d7c270509e0a7b460a458c90a3a40.jpg' }
];

ReactDOM.render(<Carousel bbYoda={bbYoda} />, document.querySelector('#root'));

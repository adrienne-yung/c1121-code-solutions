import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfClicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      numberOfClicks: this.state.numberOfClicks + 1
    });
  }

  render() {
    const clicked = this.state.numberOfClicks;
    let button = null;
    if (clicked < 3) {
      button = <button onClick={this.handleClick}>Hot Button</button>;
    } else if (clicked < 6) {
      button = <button className='frostbite' onClick={this.handleClick}>Hot Button</button>;
    } else if (clicked < 9) {
      button = <button className='chilly-blue' onClick={this.handleClick}>Hot Button</button>;
    } else if (clicked < 12) {
      button = <button className='mild-red' onClick={this.handleClick}>Hot Button</button>;
    } else if (clicked < 15) {
      button = <button className='del-taco-scorch' onClick={this.handleClick}>Hot Button</button>;
    } else if (clicked < 18) {
      button = <button className='disco-inferno' onClick={this.handleClick}>Hot Button</button>;
    } else {
      button = <button className='spicy-water' onClick={this.handleClick}>Hot Button</button>;
    }
    return (button);
  }
}

export default HotButton;

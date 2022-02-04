import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    const clicked = this.state.isClicked;
    return (
      <div id='react-toggle-switch'>
        <div className={clicked ? 'switch background-active' : 'switch background'}></div>
        <div onClick={this.handleClick} className={clicked ? 'slide slide-direction-active' : 'slide slide-direction'}></div>
        <label>{!clicked ? 'OFF' : 'ON'}</label>
      </div>
    );
  }
}

export default ToggleSwitch;

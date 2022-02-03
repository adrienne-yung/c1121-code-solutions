import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    var click = this.state.isClicked;
    let button = null;
    if (click === false) {
      button = <button onClick = {this.handleClick}> Click Me! </button>;
    } else {
      button = <button>Thanks!</button>;
    }
    return (
      button
    );
  }
}

ReactDOM.render(
  <CustomButton/>,
  document.querySelector('#root')
);

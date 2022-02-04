import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      icon: '',
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.validity = this.validity.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  validity(event) {
    event.preventDefault();
    if (this.state.value.length === 0) {
      this.setState({
        icon: 'fas fa-times red',
        message: 'A password is required.'
      });
    } else if (this.state.value.length < 8) {
      this.setState({
        icon: 'fas fa-times red',
        message: 'Your password is too short.'
      });
    } else {
      this.setState({
        icon: 'fas fa-check green',
        message: ''
      });
    }

  }

  render() {
    return (
      <form onSubmit={this.validity}>
        <label form="password">Password:</label>
        <input id="password" type="password" name="password-input" value={this.state.value} onChange={this.handleChange}></input>
        <i className={this.state.icon}></i>
        <p>{this.state.message}</p>
      </form>
    );
  }
}

export default ValidatedInput;

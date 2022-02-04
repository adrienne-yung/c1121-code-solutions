import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      message: 'A password is required.'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  // validity(event) {
  //   event.preventDefault();
  //   if (this.state.value.length === 0) {
  //     this.setState({
  //       icon: 'fas fa-times red',
  //       message: 'A password is required.'
  //     });
  //   } else if (this.state.value.length < 8) {
  //     this.setState({
  //       icon: 'fas fa-times red',
  //       message: 'Your password is too short.'
  //     });
  //   } else {
  //     this.setState({
  //       icon: 'fas fa-check green',
  //       message: ''
  //     });
  //   }

  // }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label form="password">Password:</label>
        <div>
          <input id="password" type="password" name="password-input" value={this.state.value} onChange={this.handleChange}></input>
          <i className={this.state.value.length < 8 ? 'fas fa-times red' : 'fas fa-check green'}></i>
          <p className={this.state.value.length < 8 ? 'err-message' : 'hidden'} >{this.state.value.length === 0 ? 'A password is required.' : 'Your password is too short.'}</p>
        </div>
      </form>
    );
  }
}

export default ValidatedInput;

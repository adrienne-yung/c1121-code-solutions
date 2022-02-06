import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0
    };
    this.handleClickRight = this.handleClickRight.bind(this);
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleClickDot = this.handleClickDot.bind(this);
  }

  mount() {
    this.intervalId = setInterval(() => {
      if (this.state.currentImageIndex === this.props.bbYoda.length - 1) {
        this.setState({ currentImageIndex: -1 });
      }
      this.setState({ currentImageIndex: this.state.currentImageIndex + 1 });
    }, 3000);
  }

  handleClickRight() {
    this.setState({ currentImageIndex: this.state.currentImageIndex + 1 });
    if (this.state.currentImageIndex === this.props.bbYoda.length - 1) {
      this.setState({ currentImageIndex: 0 });
    }
  }

  handleClickLeft() {
    this.setState({ currentImageIndex: this.state.currentImageIndex - 1 });
    if (this.state.currentImageIndex === 0) {
      this.setState({ currentImageIndex: this.props.bbYoda.length - 1 });
    }
  }

  handleClickDot(event) {
    this.setState({ currentImageIndex: Number(event.target.className[0]) });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="align-center">
            <i className="fas fa-chevron-left" onClick={this.handleClickLeft}></i>
            {this.props.bbYoda.map((yoda, index) => {
              return (
                <img className={this.state.currentImageIndex === index ? 'view' : 'hidden'} key={yoda.name} src={yoda.url} />
              );
            })}
            <i className="fas fa-chevron-right" onClick={this.handleClickRight}></i>
          </div>
          <div className="align-button">
            {this.props.bbYoda.map((yoda, index) => {
              return (
                <button onClick={this.handleClickDot} className={`${index} align-button ${this.state.currentImageIndex === index ? 'black' : 'white'}`} key={yoda.name}></button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;

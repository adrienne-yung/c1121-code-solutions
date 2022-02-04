import React from 'react';
class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      seconds: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  play() {
    this.timerID = setInterval(() => {
      this.setState({
        playing: true,
        seconds: this.state.seconds + 1
      });
    }, 1000);
  }

  pause() {
    this.setState({ playing: false });
    clearInterval(this.timerID);
  }

  handleClick() {
    const clicked = this.state.playing;
    if (!clicked) {
      this.play();
    } else {
      this.pause();
    }
  }

  reset() {
    const clicked = this.state.playing;
    if (!clicked) {
      this.setState({ seconds: 0 });
    }
  }

  render() {
    const iconCSS = this.state.playing ? 'fas fa-pause fa-2x' : 'fas fa-play fa-2x';
    return (
      <div>
        <div onClick={this.reset} id="timer">
          <span className="count">{this.state.seconds}</span>
        </div>
        <div id="pause-play">
          <i onClick={this.handleClick} className={iconCSS}></i>
        </div>
      </div>
    );
  }

}

export default Stopwatch;

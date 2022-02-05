import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openNote: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const clickedNote = Number(event.target.className);
    const newOpenNote = clickedNote === this.state.openNote ? null : clickedNote;
    this.setState({ openNote: newOpenNote });
  }

  render() {
    return (
      this.props.notes.map((note, index) => {
        return (
          <div key={index}>
            <button className={index} onClick={this.handleClick}>{note.noteName}</button>
            <p className={this.state.openNote === index ? 'description' : 'hidden'}>{note.description}</p>
          </div>
        );
      })
    );
  }
}

export default Accordion;

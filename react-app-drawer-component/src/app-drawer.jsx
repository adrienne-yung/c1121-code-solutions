import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerView: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    if (!this.state.drawerView) {
      this.setState({ drawerView: true });
    }
  }

  close() {
    if (this.state.drawerView) {
      this.setState({ drawerView: false });
    }
  }

  render() {
    const drawerDisplay = this.state.drawerView
      ? 'show'
      : 'hidden';
    return (
      <div>
        <i className="fas fa-bars" onClick={this.state.drawerView === false ? this.open : this.close}></i>
        <div className={`page-height ${drawerDisplay}`}>
          <div className="overlay" onClick={this.close}>
            <div className="modal">
              <h1>MENU</h1>
              <a className={drawerDisplay} onClick={this.close}>About</a>
              <a className={drawerDisplay} onClick={this.close}>Get Started</a>
              <a className={drawerDisplay} onClick={this.close}>Sign In</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;

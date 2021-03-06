import React, { Component } from 'react';

export default class Main extends Component {
  state = {
    clickedTimes: 0
  };

  _renderCongrats() {
    return (
      <div className="overlay">
        <h1>Congrats!</h1>
        <p>You have reached 10! Now grab the code and play with it!</p>
        <ul>
          <li>
            <a href="http://github.com/catalinmiron/my-react-boilerplate">
              Github
            </a>
          </li>
          <li><a href="http://twitter.com/mironcatalin">@mironcatalin</a></li>
        </ul>
      </div>
    );
  }

  _renderClicker() {
    return (
      <div className="clicker">
        <button onClick={this.increment}>
          Increment
        </button>
        <p className="counter">{this.state.clickedTimes}</p>
      </div>
    );
  }

  render() {
    return (
      <div className="main">
        <div className="overlay welcome">
          <h1>Welcome.</h1>
          <p>Press anywhere to increase the counter!</p>
        </div>
        {this.state.clickedTimes < 10
          ? this._renderClicker()
          : this._renderCongrats()}
        <footer>
          <p>Change your <code>app.js</code> file.</p>
        </footer>
      </div>
    );
  }

  increment = () => {
    this.setState({
      clickedTimes: this.state.clickedTimes + 1
    });
  };
}

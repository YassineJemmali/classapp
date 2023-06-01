import React, { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
      intervall: null,
    };
  }

  componentDidMount() {
    this.setState({
      intervall: setInterval(
        () => this.setState({ timer: this.state.timer + 1 }),
        1000
      ),
    });
  }

  render() {
    return (
      <div>
        Le temps depuis que vous avez charger la page {this.state.timer}{" "}
      </div>
    );
  }
}

export default Timer;

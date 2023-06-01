import React, { Component } from "react";
import Profile from "./Components/Profile";
import Timer from "./Components/Timer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "Yassine Jemmali",
      show: false,
    };
  }

  render() {
    const showProfile = () => {
      this.setState({ show: !this.state.show });
    };
    return (
      <div>
        <h1>Mon Nom est {this.state.fullName} </h1>
        <button onClick={showProfile}>
          {this.state.show ? "Cacher" : "Afficher"}{" "}
        </button>
        {this.state.show && <Profile />}
        <Timer />
      </div>
    );
  }
}

export default App;

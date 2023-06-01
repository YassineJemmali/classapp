import React, { Component } from "react";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      Pseudo: "Sano",
      Bio: "Je suis un étudiant en FullStack JS",
      Profession: "SEO",
      imgUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg",
    };
  }

  render() {
    return (
      <div>
        <img src={this.state.imgUrl} alt="myPhoto" style={{ width: "280px" }} />
        <h3>Mon Pseudo : {this.state.Pseudo} </h3>
        <h3>Ma bio : {this.state.Bio} </h3>
        <h4>Ma profession : {this.state.Profession} </h4>
      </div>
    );
  }
}

export default Profile;

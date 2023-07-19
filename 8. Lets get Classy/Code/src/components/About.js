import React from "react";
import User from "./uSER.JS";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parnets  constructor");
  }

  componentDidMount() {
    console.log("parents component did mount");
  }
  render() {
    console.log("Parnets  render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is the About page</h2>
        <User />
        <UserClass name="Mani" />
      </div>
    );
  }
}

export default About;

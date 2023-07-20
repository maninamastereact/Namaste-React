import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "dummy photo",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/maninamastereact");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Componenet did update");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2> Name: {name} </h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 9791071518</h4>
      </div>
    );
  }
}

export default UserClass;

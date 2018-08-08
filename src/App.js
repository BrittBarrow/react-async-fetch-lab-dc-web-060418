import React, { Component } from "react";

class App extends Component {
  state = {
    peopleInSpace: []
  };

  render() {
    return (
      <ul>
        {this.state.peopleInSpace.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    );
  }
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          peopleInSpace: data
        })
      );
  }
}

export default App;

import React, { Component } from "react";

class App extends Component {
  state = {
    peopleInSpace: [],
    empty: true
  };

  render() {
    return !this.state.empty ? (
      <ul>
        {this.state.peopleInSpace.people.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    ) : (
      ""
    );
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          peopleInSpace: data,
          empty: false
        })
      );
  }
}

export default App;

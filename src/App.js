import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      athletes: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(athletes => this.setState({athletes}))
  }

  render() {
    return (
      <div className="App">
          {
            this.state.athletes.map(athlete => (
            <h1 key={athlete.id}> {athlete.name} </h1>
          ))}
      </div>
    );
  }
}

export default App;
 
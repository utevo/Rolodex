import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      athletes: [
        {
          id: 1,
          name: "Mike Tyson"
        },
        {
          id: 2,
          name: "Adam Małysz"
        },
        {
          id: 3,
          name: "Usain Bolt"
        },
      ]
    }
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
 
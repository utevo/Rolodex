import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => users.map(
        user => Object.assign(user, { image: `https://robohash.org/${user.id}/?set=set4` })
      ))
      .then(users => this.setState({ users }))
  }

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <input
          type='search'
          placeholder='Search User'
          onChange={e => {
            this.setState({ searchField: e.target.value })
          }}
        />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;

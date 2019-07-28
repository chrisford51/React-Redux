import React, { Component } from 'react';
import People from './people';

class App extends Component {
  state = {
    people : [
      { name: 'Chris', age: 24, location: 'Indiana', id: 1 },
      { name: 'Carol', age: 25, location: 'Indiana', id: 2 },
      { name: 'Cain', age: 25, location: 'Georgia', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My React App!</h1>
          <p>Welcome!</p>
          <People people={this.state.people}/>
        </header>
      </div>
    );
  }
}

export default App;

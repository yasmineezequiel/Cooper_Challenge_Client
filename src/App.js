import React, { Component } from 'react';
import DisplayCooperResult from './Components/DisplayCooperResult'

class App extends Component {
    state = {
      distance: '',
      gender: 'female',
      age: ''
    }

  onChange(event) {
    debugger
    this.setState({
      [event.target.id]: event.target.value
    })
  }

 render() {
    return (
      <>

          <DisplayCooperResult 
            distance={this.state.distance}
            gender={this.state.gender}
            age={this.state.age}
            />
      </>
    );
  }
}

export default App;
import React, { Component } from 'react';
import DisplayCooperResult from './Components/DisplayCooperResult'
import InputFields from './Components/InputFields';

class App extends Component {
    state = {
      distance: '',
      gender: 'female',
      age: ''
    }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

 render() {
    return (
      <>
        <InputFields
        inputChangeHandler={this.onChange.bind(this)} 
        />
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
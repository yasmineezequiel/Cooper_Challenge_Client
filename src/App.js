import React, { Component } from 'react';
import DisplayCooperResult from './Components/DisplayCooperResult'

class App extends Component {
  constructor(props) 
 render() {
    return (
      <>
        <div>
          <label>Distance</label>
          <input id="distance"></input>
        </div>

        <select id="gender">
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>

        <div>
          <label>Age</label>
          <input id="age"></input>
        </div>
        <div>
          <DisplayCooperResult />
        </div>
      </>
    );
  }
}

export default App;
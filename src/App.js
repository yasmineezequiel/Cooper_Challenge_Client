import React, { Component } from 'react';
import DisplayCooperResult from './Components/DisplayCooperResult';
import InputFields from './Components/InputFields';
import LoginForm from './Components/LoginForm';
import { authenticate } from './Modules/Auth';
import DisplayPerformanceData from './Components/DisplayPerformanceData';
import DisplayCooperChart from './Components/DisplayCooperChart';
import {
  Container,
  Grid,
  Header,
  Button
} from 'semantic-ui-react'


class App extends Component {
    state = {
      distance: '',
      gender: 'female',
      age: '',
      renderLoginForm: false,
      authenticated: false,
      email: '',
      password: '',
      message: '',
      entrySaved: false,
      renderIndex: false,
      updateIndex: false,
      renderCooperChart: false,
      updateCooperChart: false
    }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
      entrySaved: false
    })
  }

  async onLogin(e) {
    e.preventDefault();
    let resp = await authenticate(this.state.email, this.state.password)
    if (resp.authenticated === true) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: resp.message, renderLoginForm: false })
    }
  }

  entryHandler() {
    this.setState({ entrySaved: true, updateIndex: true, updateCooperChart: true });
  }


  indexUpdated() {
    this.setState({ updateIndex: false });
  }

  resultCooperChartUpdated() {
    this.setState({ updateCooperChart: false })
  }

 render() {
  let renderLogin;
  let user;
  let performanceDataIndex;
  let renderChart;
  
  if (this.state.authenticated === true) {
    user = JSON.parse(sessionStorage.getItem('credentials')).uid;
    renderLogin = (
      <p>Hi {user}</p>
    )
    if (this.state.renderIndex === true) {
      performanceDataIndex = (
        <>
          <DisplayPerformanceData
            updateIndex={this.state.updateIndex}
            indexUpdated={this.indexUpdated.bind(this)}
          />
          <button onClick={() => this.setState({ renderIndex: false })}>Hide past entries</button>
          </>
          )
    } else {
      performanceDataIndex = (
        <button id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</button>
      )
    }
    if (this.state.renderCooperChart === true) {
      renderChart = (
        <>
          <DisplayCooperChart
            updateCooperChart={this.state.updateCooperChart}
            resultCooperChartUpdated={this.resultCooperChartUpdated.bind(this)}
          />
          <button id="show-chart" onClick={() => this.setState({ renderCooperChart: false })}>Hide Chart</button>
        </>
      )
    } else {
      renderChart = (
        <button id="show-chart" onClick={() => this.setState({ renderCooperChart: true })}>Show Chart</button>
      )
    }
  } else { 
    if (this.state.renderLoginForm === true) {
      renderLogin = (
      <>
        <LoginForm 
          loginHandler={this.onLogin.bind(this)}
          inputChangeHandler={this.onChange.bind(this)}
        />
      </>
      )
    } else {
      renderLogin = (
        <>
          <Button id="login" onClick={ () => this.setState({ renderLoginForm: true }) }>Login</Button>
          <p>{this.state.message}</p>
        </>
      )
    }
  }
    return (
      <>
        <Container>
          <Grid centered columns={3}>
          <Grid.Column>
            <Header
              as="h1"
              textalign="center"
              >
                Cooper
              </Header>
                <InputFields
                  inputChangeHandler={this.onChange.bind(this)} 
                  />
                  <DisplayCooperResult 
                    distance={this.state.distance}
                    gender={this.state.gender}
                    age={this.state.age}
                    authenticated={this.state.authenticated}
                    entrySaved={this.state.entrySaved}
                    entryHandler={this.entryHandler.bind(this)}
                  />
                  {performanceDataIndex}
                  <div>
                    {renderChart}
                  </div>
                  
                  {renderLogin}
              </Grid.Column>.Column>
          </Grid>
        </Container>
      </>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { getData } from '../Modules/PerformanceData';
import { Line } from 'react-chartjs-2';

class DisplayCooperChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: null
    }
  }
  componentDidMount() {
    this.getChartData()
  }

  async getChartData() {
    let result = await getData();
    this.setState({chartData: result.data.entries}, () => {
      this.props.indexUpdated();
    })
  }

  render () {
    let dataIndex;

    if (this.props.updateIndex === true) {
      this.getChartData();
    }
    if (this.state.chartData != null) {
      dataIndex = (
        <div>
          {this.state.chartData.map(item => {
            return <div key={item.id}>{item.data.message}</div>
          })}
        </div>
      )
    }

    return (
      <div>
        {dataIndex}
      </div>
    )
  }      
}

export default DisplayCooperChart
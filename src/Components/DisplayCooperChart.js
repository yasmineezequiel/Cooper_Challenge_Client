import React, { Component } from 'react';
import { getData } from '../Modules/PerformanceData';
import { Line } from 'react-chartjs-2';

class DisplayCooperChart extends Component {
  state = {
    performanceData: null
  }

  componentDidMount() {
    this.getPerformanceData()
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({performanceData: result.data.entries}, () => {
      this.props.resultCooperChartUpdated();
    })
  }

  render() {
    let dataChart;

    if (this.props.updateCooperChart === true) {
      this.getPerformanceData();
    }
    if (this.state.performanceData != null) {
      const distances = []
      const labels = []
      this.state.performanceData.forEach(item => {
        distances.push(item.data.distance)
        labels.push(item.data.message)
      })
      const data = {
        datasets: [
          {
            data: distances,
            label: 'Performances'
          }
        ], labels: labels
      }
      dataChart = (
        <Line data={data} />
      )
    }
    return (
      <div>
        {dataChart}
      </div>
    );
  }
}

  

export default DisplayCooperChart;
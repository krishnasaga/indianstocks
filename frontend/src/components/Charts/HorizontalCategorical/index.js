import React from 'react';
import {Bar} from 'react-chartjs-2';

const HorizontalBarChart = ({options, series}) => {
  const [first = []] = series;

  return <Bar data={{
    labels: first.data.map((data) => data.x),
    datasets: [
      {
        label: 'MWh',
        backgroundColor: first.color,
        data: first.data.map((data) => data.y),
      },
    ],
  }} options={{
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      }
    }
  }}/>

};

export default HorizontalBarChart;

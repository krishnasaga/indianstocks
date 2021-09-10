import React from 'react';
import {Bar} from 'react-chartjs-2';
import {Paper} from "../../Paper";
import { Box } from 'theme-ui';

const HorizontalBarChart = ({options, series}) => {
  const [first = []] = series;
  const {units} = options;
  return <Paper bg={'white'}><Bar data={{
    labels: first.data.map((data) => data.x),
    datasets: series.map(data => ({
      label: units,
      backgroundColor: data.color,
      data: data.data.map((data) => data.y),
    }))
  }} options={{
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      }
    }
  }}/>
  </Paper>
};

export default HorizontalBarChart;

import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineSeries
} from 'react-vis';


export function GraphLine({

                                }) {
  return (
    <XYPlot width={100} height={150}>
      <LineSeries
        data={[
          {x: -1, y: 10},
          {x: 0, y: 5},
          {x: 1, y: 3},
          {x: 2, y: -5},
          {x: 3, y: 15}
        ]}
      />
    </XYPlot>
  );
}

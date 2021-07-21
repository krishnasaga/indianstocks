import React from "react";
import {
  XYPlot,
  LineSeries,
  VerticalBarSeries,
  MarkSeries,
  AreaSeries
} from "react-vis";
import "../node_modules/react-vis/dist/style.css";
import { useWindowSize } from "@react-hook/window-size";

const SERIES_TYPES = {
  bar: VerticalBarSeries,
  line: LineSeries,
  mark: MarkSeries,
  area: AreaSeries
};

export function TimeSeries({ series, options }) {
  //somewhere

  return (
    <div>
      <XYPlot {...options}>
        {series.map((currentSeries, index) => {
          const { type, data, color, opacity } = currentSeries;
          if (!type || !data) return null;
          const Series = SERIES_TYPES[type];
          return (
            <Series opacity={opacity} color={color} key={index} data={data} />
          );
        })}
      </XYPlot>
    </div>
  );
}

export function ResponsiveTimeSeries(props) {
  const [width, height] = useWindowSize();
  return <TimeSeries {...props} options={{ ...props.options, width }} />;
}

import React, {useCallback, useState} from "react";
import {
  AreaSeries,
  DiscreteColorLegend,
  LineSeries,
  MarkSeries,
  VerticalBarSeries,
  VerticalGridLines,
  XAxis,
  XYPlot
} from "react-vis";
import {useWindowSize} from "@react-hook/window-size";

const SERIES_TYPES = {
  bar: VerticalBarSeries,
  line: LineSeries,
  mark: MarkSeries,
  area: AreaSeries
};

export function TimeSeries({series, options}) {

  return (
    <div>
      <XYPlot {...options}>
        <VerticalGridLines/>
        <XAxis tickTotal={series[0].data.length}
               tickFormat={v => `2${String(v).padStart(3, "0")}`}
               tickLabelAngle={0}/>

        {series.map((currentSeries, index) => {
          const {type, data, color, opacity} = currentSeries;
          if (!type || !data) return null;
          const Series = SERIES_TYPES[type];
          return (
            <Series
              curve={'curveMonotoneX'}
              key={index}
              opacity={opacity}
              color={color}
              data={data}/>
          );
        })}

      </XYPlot>

      <DiscreteColorLegend
        orientation={'horizontal'}
        items={series.map(data => ({title: data.name, strokeWidth: 40}))}/>
    </div>
  );
}

export function ResponsiveTimeSeries(props) {
  const [width, setWidth] = useState(0);
  const [windowWidth, height] = useWindowSize();

  const div = useCallback(node => {
    if (node !== null) {
      const rect = node.getBoundingClientRect();
      setWidth(rect.width);
    }
  }, [windowWidth]);

  return <div ref={div}><TimeSeries
    {...props}
    options={{...props.options, width}}/></div>;
}

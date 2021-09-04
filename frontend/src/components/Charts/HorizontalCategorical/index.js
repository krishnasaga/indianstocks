import React, {useCallback, useState} from "react";
import {
  AreaSeries,
  DiscreteColorLegend,
  HorizontalBarSeries,
  MarkSeries,
  VerticalGridLines,
  XAxis,
  XYPlot
} from "react-vis";
import {Box, Text} from "theme-ui";
import {useWindowSize} from '@react-hook/window-size';
import {Paper} from "../../Paper";

const SERIES_TYPES = {
  bar: HorizontalBarSeries,
  line: LineSeries,
  mark: MarkSeries,
  area: AreaSeries
};

export function TimeSeries({units = null, series, options}) {

  const [pointer, setPointer] = useState({
    0: {}
  });

  const [focus, setFocus] = useState(false);

  if (!series.length) return "Insufficient Data";

  return (
    <Box sx={{
      position: 'relative'
    }}>
      <XYPlot
        onMouseEnter={() => {
          setFocus(true);
        }}
        onMouseLeave={() => {
          setFocus(false);
        }}
        {...options} >
        <VerticalGridLines/>
        <XAxis tickTotal={series[0].data.length}
               tickFormat={v => `${v}`}
               tickLabelAngle={0}
        />
        {series.map((currentSeries, seriesIndex) => {
          const {type, data, color, opacity} = currentSeries;
          if (!type || !data) return null;
          const Series = SERIES_TYPES[type];
          return (
            <Series
              key={seriesIndex}
              opacity={opacity}
              color={color}
              data={data}
              onNearestXY={(value, {event, innerX, innerY, index}) => {
                setPointer((pointer) => Object.assign({}, pointer, {
                  [seriesIndex]: {
                    value,
                    event,
                    innerX,
                    innerY,
                    index
                  }
                }))
              }}
            />
          );
        })}

      </XYPlot>

      <DiscreteColorLegend
        orientation={'horizontal'}
        items={series.map(data => ({title: data.name, strokeWidth: 40}))}/>
      {focus
        ? <Tooltip
          units={options.units}
          series={series}
          pointer={pointer}
          onMouseEnter={() => {
            setFocus(true)
          }}
          onMouseLeave={() => {
            setFocus(false)
          }}
        />
        : null}
    </Box>
  );
}

export function Tooltip({units = null, pointer, series, ...remainingProps}) {
  return pointer[0].value ? <Paper bg={'white'} sx={{
    position: 'fixed',
    left: pointer[0].innerX,
    top: pointer[0].event.clientY,
    transform: 'translate(-50%,-100%)'
  }}  {...remainingProps} >
    <Box>{pointer[0].value.x}</Box>
    {
      Object.keys(pointer)
        .map((key) => {
          return <Box key={key}>
            <Box
              bg={series[key].color}
              sx={{
                height: '10px',
                width: '10px',
                display: 'inline-block'
              }}
            />

            <Text as={'span'} sx={{
              color: 'black',
              fontSize: [1],
              fontWeight: '300',
            }}> {series[key].name} </Text>
            {pointer[key]
              ? <Text as={'span'}
                      sx={{
                        color: 'black',
                        fontSize: [1],
                        fontWeight: '500'
                      }}> {pointer[key].value.y} {units}</Text>
              : null}
          </Box>;
        })
    }
  </Paper> : null;
}

export function ResponsiveTimeSeries(props) {
  const [width, setWidth] = useState(0);
  const [windowWidth, height] = useWindowSize();

  const div = useCallback(node => {
    if (node !== null) {
      const rect = node.getBoundingClientRect();
      setWidth(rect.width);
    }
  }, [windowWidth])
  return <div ref={div}><TimeSeries
    {...props}
    options={{...props.options, width: width || 10}}/></div>;
}

export { ResponsiveTimeSeries as default };


export function ResponsiveCategoricalSeries(props) {
  return (
    <div>

    </div>
  );
}


export function usePointer() {
  const [pointer, setPointer] = useState({
    0: {}
  });

  const container = useCallback(()=>{

  });

  return {
    pointer,
    focus,
    container,
    handlers
  }
}

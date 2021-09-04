import React, {useEffect, useState} from 'react';
import {ResponsiveTimeSeries} from "./index";
import { AdaptiveChart } from "../AdaptiveChart";
import 'isomorphic-fetch';

export const WorldStatsTimeSeries = (props) => {
  const {data} = useWorldStatsChart({
    chartName: props.name
      || 'electricity/india-electricity-consumption-over-time'
  });

  if (!data || !data.series) return JSON.stringify(data);

  const series = data.series;

  const Chart = AdaptiveChart[props.type];

  return <Chart
    {...props}
    series={series}
    options={{
      height: 200,
      ...data.options
    }}
  />;
};


function useWorldStatsChart({chartName}) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://worldstats.github.io/charts/${chartName}.json`)
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, [])


  return {data, loading, error};
}

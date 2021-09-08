import React, {useEffect, useState} from 'react';
import {ResponsiveTimeSeries} from "./index";
import { AdaptiveChart } from "../AdaptiveChart";
import { CHARTS_ROOT } from "gatsby-env-variables"
import { Paper } from '../../Paper'
import 'isomorphic-fetch';

export const WorldStatsTimeSeries = (props) => {
  const {data} = useWorldStatsChart({
    chartName: props.name
      || 'electricity/india-electricity-consumption-over-time'
  });

  if (!data || !data.series) return JSON.stringify(data);

  const series = data.series;

  const Chart = AdaptiveChart[data.type];

  console.log('Hello',props.type);
  console.log('Hello',Chart);

  return <Paper bg={'white'}><Chart
    {...props}
    series={series}
    options={{
      height: 400,
      ...data.options
    }}
  /></Paper>;
};


function useWorldStatsChart({chartName}) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${CHARTS_ROOT}/${chartName}.json`)
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, [])


  return {data, loading, error};
}

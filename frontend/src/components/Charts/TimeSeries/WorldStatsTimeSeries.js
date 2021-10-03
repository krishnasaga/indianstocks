import React, {useEffect, useState} from 'react';
import {ResponsiveTimeSeries} from "./index";
import { AdaptiveChart } from "../AdaptiveChart";
import { CHARTS_ROOT } from "gatsby-env-variables"
import { Paper } from '../../Paper'
import 'isomorphic-fetch';
import { Box } from 'theme-ui';

export const WorldStatsTimeSeries = (props) => {

  const {data} = useWorldStatsChart({
    chartName: props.name
  });

  if (!data || !data.series) return JSON.stringify(data);

  const series = data.series;


  const Chart = AdaptiveChart[data.type];

  if(!Chart) {
      console.error(`
          Chart Component not found \n
          While rendering the chart ${props.name}
      `,data.type);
      return `Chart Component ${data.type} not found`;
  }

  return <Box><Chart
    {...props}
    series={series}
    options={{
      height: 400,
      ...data.options
    }}
  /></Box>;
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

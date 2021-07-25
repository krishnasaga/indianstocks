import React,{useState} from 'react';
import {ResponsiveTimeSeries} from "./index";
import 'isomorphic-fetch';

export const WorldStatsTimeSeries = (props) => {
  const {data} = useWorldStatsChart({chartName: 'electricity/india-electricity-consumption-over-time'});

  if(!data || !data.series) return JSON.stringify(data);

  const series = data.series;

  return <ResponsiveTimeSeries
    {...props}
    series={series}
    options={{
      height: 200
    }}
  />;
};


function useWorldStatsChart({chartName}){
  const [data,setData] = useState({});
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);

  fetch(`https://worldstats.github.io/charts/${chartName}.json`)
    .then(response => response.json())
    .then(data => {
      setData(data);
    });

  return {data,loading,error};
}

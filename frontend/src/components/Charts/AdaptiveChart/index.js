import React from 'react';
import loadable from '@loadable/component'

const TimeSeries = loadable(() => import('../TimeSeries'));
const Pi = loadable(() => import('../Pi'));
const Map = loadable(() => import('../Map'));
const HorizontalCategorical = loadable(() => import('../HorizontalCategorical'));

export const AdaptiveChart = {
  TimeSeries,
  HorizontalCategorical,
  Pi,
  Map
};

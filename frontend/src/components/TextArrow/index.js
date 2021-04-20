import React from 'react';
import {Box} from 'theme-ui';
import {animated, useSpring} from 'react-spring';
import {HiArrowRight} from "react-icons/hi";


const AnimatedArrow = animated.span;

export const TextArrow = (props) => {
  const [styles, api] = useSpring(() => ({x: 0}));
  return <Box
    as={'span'}
    onMouseEnter={() => {
      api.start({x: 10})
    }}

    onMouseLeave={() => {
      api.start({x: 0})
    }}
    {...props}
  >
    {props.children}<AnimatedArrow
    style={{
      transform: 'translate(50%,21%)',
      display: 'inline-block',
      ...styles
    }}
  > <HiArrowRight/> </AnimatedArrow>
  </Box>
}

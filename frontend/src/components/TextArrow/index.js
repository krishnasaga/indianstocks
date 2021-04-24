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
      api.start({x: 15, display: 'inline-block'})
    }}

    onMouseLeave={() => {
      api.start({x: 0, display: 'none'})
    }}
    {...props}
  >
    {props.children}<AnimatedArrow
    style={{
      transform: 'translate(70%,21%)',
      display: 'none',
      ...styles
    }}
  > <HiArrowRight/></AnimatedArrow>
  </Box>
}


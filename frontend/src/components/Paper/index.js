import React from 'react';
import {Box} from 'theme-ui';

const depthToShadow = (depth) => {
  if (depth === 0) {
    return '5px 10px #888888';
  } else if (depth === 1) {
    return '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)';
  } else if (depth === 2) {
    return '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
  } else if (depth === 3) {
    return '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
  } else if (depth === 4) {
    return '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)';
  }
}

export const Paper = ({children, sx, depth = 1, ...remainingProps}) =>

    <Box sx={{
    boxShadow: depthToShadow(1),
    ...sx
  }}
  p={10}
   {...remainingProps}>
  {children}
</Box>;

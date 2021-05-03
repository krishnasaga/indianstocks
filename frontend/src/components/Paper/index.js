import React from 'react';
import {Box} from 'theme-ui';

const depthToShadow = (depth) => {
  if (depth === 0) {
    return '5px 10px #888888';
  } else if (depth === 1) {
    return '5px 10px #888888';
  } else if (depth === 2) {
    return '5px 10px #888888';
  } else if (depth === 3) {
    return '5px 10px #888888';
  } else if (depth === 4) {
    return '5px 10px #888888';
  }
}

export const Paper = ({children, sx, depth = 1, ...remainingProps}) => <Box sx={{
  boxShadow: depthToShadow(depth),
  ...sx
}} {...remainingProps}>
  {children}
</Box>;

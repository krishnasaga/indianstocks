import React from 'react';
import { Box } from 'theme-ui';

export const Tooltip = ({children, ...remainingProps}) => {
  return <Box {...remainingProps}>{children}</Box>;
};

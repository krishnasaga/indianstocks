import React from 'react';
import {Box} from 'theme-ui';

export const Paper = ({children, ...remainingProps}) => <Box {...remainingProps}>
  {children}
</Box>;

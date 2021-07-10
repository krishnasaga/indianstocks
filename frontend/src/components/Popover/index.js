import React from 'react';
import {Box} from 'theme-ui';

export const Popover = ({children, sx = {}, open, ...prop}) => {
  if (!open) return null;
  return <Box sx={{
    position: 'relative'
  }}><Box p={'5px'} pg={'white'} sx={{
    boxShadow: '0px 1px 2px rgba(128, 138, 157, 0.12), 0px 8px 32px rgba(128, 138, 157, 0.24);',
    position: 'absolute',
    ...sx
  }}{...prop} >
    {children}
  </Box></Box>

};

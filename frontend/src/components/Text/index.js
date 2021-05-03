import React from 'react';

export const Text = ({children, sx, ...remainingProps}) => {
  return <Text sx={{...sx, fontSize: ''}} {...remainingProps} >
    {children}
  </Text>;
};

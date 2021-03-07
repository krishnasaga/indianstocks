import React from 'react';
import { Box,Grid } from 'theme-ui';


const Explorer = ({children}) => {
  return <Box h={[200]} p={20} sx={{
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);'
  }} >
    {children}
  </Box>
};

export default () => <Box p={20}>
  <Grid columns={[1,1,2,4]} >
    <Explorer>
      <a href={"/sectors"}>Explore Companies by Sector</a>
    </Explorer>
  </Grid>
</Box>;

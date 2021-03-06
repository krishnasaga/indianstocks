import React from 'react';
import { Box } from 'theme-ui';


const Explorer = () => {
  return <Box sx={{
    boxShadow: ' box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);'
  }} >

  </Box>
};

export default () => <div>
  <Explorer>
    <a href={"/companies-by-sector"}>Explore Companies by Sector</a>
  </Explorer>
</div>;

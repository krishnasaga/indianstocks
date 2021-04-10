import React from 'react';
import {Box,Grid} from 'theme-ui';

export const Footer = () => {
  return <Box
    as={'footer'}
    bg={'color4'}
    sx={{
      height: '400px'
    }}>
    <Box>
      <Grid
      columns={['1fr 1fr 1fr 1fr']}
      alignItems={'center'}>
      <Box>
        Hello
      </Box>
      <Box>
        Hello
      </Box>
      <Box>
        Hello
      </Box>
      <Box>
        Hello
      </Box>
    </Grid>
    </Box>
  </Box>;
};

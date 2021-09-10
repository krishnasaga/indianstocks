import React from 'react';
import {Paper} from '../../Paper';
import {Box, Text,Grid} from 'theme-ui';

export default ({options, series}) => {
  return <Grid columns={[1,series.length]}>
    {series.map((data) => <Paper bg={'white'}>
      <Box sx={{
        textAlign: 'center'
      }}>
        <Text
          sx={{
            fontWeight: 500,
            fontSize: [4]
          }}
          as={'span'}>
          {data.data}
        </Text>

        <Text
          sx={{
            fontWeight: 500,
            fontSize: [1]
          }}
          as={'span'}

        >
          {` ${data.unit}`}
        </Text>
        <Text
          color={data.color}
          sx={{
            fontWeight: 700,
            fontSize: [2]
          }}

        >
          {data.name}
        </Text>
      </Box>
    </Paper>)
    }
  </Grid>
};

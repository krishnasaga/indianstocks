import React from 'react';
import {Box,Grid, Text, Heading} from 'theme-ui';

export const Footer = () => {
  return <Box
    as={'footer'}
    bg={'color4'}
    sx={{
      height: '400px',
      color: 'white'
    }}>
    <Box>
      <Grid
      columns={[6]}>
        <Box sx={{
          gridColumnStart: ['1', '1', '2'],
          gridColumnEnd: '5',
          paddingY: '20px',
          marginLeft: ['20px', '20px', '0']
        }}>
          Brand
        </Box>
      </Grid>
    </Box>

    <Box>
      <Grid gap={2}
      columns={[2, 3, 6]}
      >

      <Box sx={{
        gridColumnStart: ['1', '1', '2'],
        marginLeft: ['20px', '20px', '0'],
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Heading as='h4'>Who We Are</Heading>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Heading as='h4'>What We Do</Heading>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: ['20px', '0'],
        }}>
          <Heading as='h4'>Helpful Links</Heading>
          <Text>indianstocks</Text>
          <Text>Text</Text>
          <Text>Text</Text>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: ['0', '20px', '0'],
        }}>
          <Heading as='h4' >Stay Connected</Heading>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
        </Box>

    </Grid>
    </Box>

    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingY: '20px'
    }}>
        <Box sx={{paddingY: '10px'}}>Browse By: Organizations, People, Events</Box>
        <Box sx={{paddingY: '10px'}}>Browse By: Organizations, People, Events</Box>

    </Box>

  </Box>;
};

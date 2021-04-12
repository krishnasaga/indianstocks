import React from 'react';
import {Box,Grid, Text, Heading, Link} from 'theme-ui';
import {AiFillTwitterCircle} from "react-icons/ai";
import {FaFacebook, FaLinkedin, FaInstagramSquare} from "react-icons/fa";
import { IconButton } from 'theme-ui';
import styled from "styled-components";


export const Footer = () => {
  return <Box
    as={'footer'}
    // bg={'color4'}
      bg={'black'}
    sx={{
      // height: '400px',
      color: 'white',
      fontSize: '0.9rem'
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
        gridColumnStart: ['2', '1', '2'],
        marginLeft: ['0', '20px', '0'],
        display: 'flex',
        flexDirection: 'column',
        order: ['4', '4', '1']
      }}>
        <Heading as='h4' >Stay Connected</Heading>
        <Link>Crunchbase News</Link>
        <Link>Subscribe to Crunchbase Daily</Link>
        <Text sx={{color: 'white'}}><AiFillTwitterCircle /> <FaFacebook /> <FaLinkedin /> <FaInstagramSquare/></Text>
      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: ['20px', '20px', '0'],
        order: ['1', '1', '2']
      }}>
        <Heading as='h4'>Who We Are</Heading>
        <Link>Company</Link>
        <Link>Careers</Link>
        <Link>Partners</Link>
        <Link>Blog</Link>
        <Link>Press</Link>
        <Link>Contact Us</Link>

      </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: ['0', '0', '0'],
          order: ['2', '2', '3']
        }}>
          <Heading as='h4'>What We Do</Heading>
          <Link>Crunchbase Pro</Link>
          <Link>Marketplace</Link>
          <Link>Crunchbase Enterprise</Link>
          <Link>Data Licensing</Link>
          <Link>Customer Stories</Link>
          <Link>Pricing</Link>
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: ['20px', '0', '0'],
          order: ['3', '3', '4']
        }}>
          <Heading as='h4'>Helpful Links</Heading>
          <Link>Create a Profile</Link>
          <Link>Features Lists and Searches</Link>
          <Link>The Crunchbase Difference</Link>
          <Link>Knowledge Center</Link>
          <Link>Privacy</Link>
          <Link>Do not sell my info</Link>
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
        <Box sx={{
          paddingY: '10px',
          display: 'flex',
          textAlign: 'center'
        }}><Box sx={{paddingY: '10px'}}>Browse By: Organizations, People, Events</Box></Box>
    </Box>

  </Box>;
};

import React from 'react';
import {Avatar, Box, Grid, IconButton, Link, Text, Button, Image} from 'theme-ui';
import {FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagramSquare} from 'react-icons/fa';
import {ImInstagram} from 'react-icons/im'
import {SocialIcon} from "react-social-icons";




const FooterHeading = ({children}) => {
  return (
    <Text
      color={"rgb(255, 255, 255)"}
      sx={{
        fontWeight: "600",
        fontSize: ["0.9rem", "1rem"],
        paddingBottom: "10px"
      }}
    >
      {children}
    </Text>
  );
};

const FooterLink = ({children}) => {
  return (
    <Link
      color={"rgb(255, 255, 255)"}
      sx={{
        fontSize: ["0.8rem", "0.9rem"],
        fontWeight: "500",
        cursor: "pointer",
        lineHeight: "1.8",

      }}
    >
      {children}
    </Link>
  );
};

export const Footer = () => {
  return <Box
    as={'footer'}
    bg={'color4'}
    sx={{
      // height: '400px',
      color: 'rgb(255, 255, 255)',
      fontSize: '0.9rem'
    }}>
    <Box>
      <Grid
        columns={[6]}>
        <Box sx={{
          gridColumnStart: ['1', '1', '2'],
          gridColumnEnd: '5',
          paddingY: '20px',
          marginLeft: ['20px', '20px', '0'],
          display: 'flex',
          alignItems: 'center',
        }}>
          <Text sx={{
            display: 'inline',
            color: 'rgb(255, 255, 255)',
            fontSize: '2.1rem',
            fontWeight: 'bold',
          }}
          >BigInvest</Text>
        </Box>
      </Grid>
    </Box>

    <Box>
      <Grid gap={3}
            columns={[2, 3, 6]}
      >
        <Box sx={{
          gridColumnStart: ['2', '1', '2'],
          marginLeft: ['0', '20px', '0'],
          display: 'flex',
          flexDirection: 'column',
          order: ['4', '4', '1']
        }}>
          <FooterHeading as='h4'>Stay Connected</FooterHeading>
          <FooterLink>Crunchbase News</FooterLink>
          <FooterLink>Subscribe to Crunchbase Daily</FooterLink>
          <Text sx={{color: 'color4', cursor: "pointer"}}>
            <SocialIcon network="twitter" bgColor="white" style={{ height: 24, width: 24 }} />
            <SocialIcon network="facebook" bgColor="white" style={{ height: 24, width: 24, marginLeft: "8px" }} />
            <SocialIcon network="linkedin" bgColor="white" style={{ height: 24, width: 24, marginLeft: "8px" }} />
            <SocialIcon network="instagram" bgColor="white" style={{ height: 24, width: 24, marginLeft: "8px" }} />
          </Text>
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: ['20px', '20px', '0'],
          order: ['1', '1', '2']
        }}>
          <FooterHeading as='h4'>Who We Are</FooterHeading>
          <FooterLink>Company</FooterLink>
          <FooterLink>Careers</FooterLink>
          <FooterLink>Partners</FooterLink>
          <FooterLink>Blog</FooterLink>
          <FooterLink>Press</FooterLink>
          <FooterLink>Contact Us</FooterLink>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: ['0', '0', '0'],
          order: ['2', '2', '3']
        }}>
          <FooterHeading as='h4'>What We Do</FooterHeading>
          <FooterLink>Pro Membership</FooterLink>
          <FooterLink>Marketplace</FooterLink>
          <FooterLink>BigInvest Enterprise</FooterLink>
          <FooterLink>Data Licensing</FooterLink>
          <FooterLink>Customer Stories</FooterLink>
          <FooterLink>Pricing</FooterLink>
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: ['20px', '0', '0'],
          order: ['3', '3', '4']
        }}>
          <FooterHeading as='h4'>Helpful Links</FooterHeading>
          <FooterLink>Create a Profile</FooterLink>
          <FooterLink>Features Lists and Searches</FooterLink>
          <FooterLink>The Crunchbase Difference</FooterLink>
          <FooterLink>Knowledge Center</FooterLink>
          <FooterLink>Privacy</FooterLink>
          <FooterLink>Do not sell my info</FooterLink>
        </Box>
      </Grid>
    </Box>

    <Box sx={{
      paddingTop: '40px',
      textAlign: 'center'
    }}>
      <FooterHeading>Browse By: Organizations, People, Events</FooterHeading>
    </Box>

    <Box sx={{
      padding: '20px 20px 40px 20px',
      textAlign: 'center',
    }}>
      <FooterLink>Terms of Service</FooterLink><span>|</span>
      <FooterLink>Privacy Policy</FooterLink><span>|</span>
      <FooterLink>Sitemap</FooterLink><span>|</span>
      <Text sx={{
        color: 'rgb(255, 255, 255)',
        fontSize: ['0.8rem', '0.9rem'],
        lineHeight: '1.8',
        display: 'inline'
      }}
      > <a href="https://www.freepik.com/vectors/background">
        Background vector created by pikisuperstar - www.freepik.com
      </a> </Text>
      <Text sx={{
        color: 'rgb(255, 255, 255)',
        fontSize: ['0.8rem', '0.9rem'],
        lineHeight: '1.8',
        display: 'inline'
      }}
      > &copy; 2021 BigInvest. All Rights Reserved.</Text>
    </Box>
  </Box>;
};

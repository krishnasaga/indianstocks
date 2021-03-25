import React from 'react';
import { Box,Grid,Text,Link,Container,Button} from 'theme-ui';
import {TopNav} from "../components/TopNav";
import introImage  from "./background.jpg";

const Explorer = ({children}) => {
  return <Box p={20} >
    <Box h={[200]} p={20} sx={{
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);'
  }} >
    {children}
  </Box></Box>;
};

export default () => <Box>
  <TopNav/>
  <Introbanner/>
  <Grid py={100} columns={[1,1,2,4]} >
    <Explorer>
      <a href={"/sectors"}>Explore Companies by Sector</a>
    </Explorer>
  </Grid>
</Box>;

function Introbanner(){
  return <Box bg={'black'} sx={{
    height: '100vh',
    background: `black url(${introImage}) fixed center`,
    position: 'relative',
    filter: 'light(1)',
    zIndex: 0
  }} >

    <Container >
    <Grid>
      <Box >
        <Box sx={{
          height: '250px'
        }}>
        </Box>
        <Box my={10}>
          <Text color={'text2'} sx={{ fontSize: '2.5rem'}}>
            Invest on Big Disruptions
          </Text>
        </Box>
        <Box my={10}>
          <Text color={'text1'}
                sx={{ fontSize: '1.5rem'}}>
            With convergence of financial and technological expertise
          </Text>
        </Box>
        <Button my={40} varient={'primary'}>
          Explore
        </Button>
      </Box>
      <Box>

      </Box>
    </Grid>
    </Container>
    <Box  bg={'black'} sx={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: 0.9,
      zIndex: -1,
      top: 0
    }}/>
  </Box>
}

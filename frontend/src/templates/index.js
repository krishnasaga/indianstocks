import React from "react";
import {Box, Button, Container, Grid, Text} from "theme-ui";
import {TopNav} from "../components/TopNav";
import introImage from "../pages/background.jpg";
import {Cards} from '../components/Cards';
import {Footer} from "../components/Footer";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Explorer = ({children, ...remainingProps}) => {
  return (
    <Container>
      <Box {...remainingProps} py={20} sx={{width: '100vw'}}>
        <Box
          bg={"color2"}
          h={[200]}
          p={20}
          sx={{
            boxShadow:
              "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);",
          }}
        >
          {children}
        </Box>
      </Box>
    </Container>
  );
};

export default ({
                  pageContext: {sectors},
                }) => {
  return (
    <Box sx={{width: '100%', overflowX: 'hidden'}}>
      <TopNav/>
      <Introbanner/>
      <Box bg={"color5"}>
        <Container>
          <Box py={'4rem'} sx={{paddingLeft: '35px',paddingRight: '50px'}}>
            <Cards items={sectors}

            />
          </Box>
        </Container>
      </Box>
      <Footer/>
    </Box>
  );
};

function Introbanner() {
  return (
    <Box
      bg={"black"}
      sx={{
        height: "100vh",
          width: "100vw",
        background: `black url(${introImage}) fixed center`,
        position: "relative",
        filter: "light(1)",
        zIndex: 0,
      }}
    >
      <Container>
        <Grid>
          <Box p={20} sx={{textAlign: 'center'}}>
            <Box
              sx={{
                height: "250px",
              }}
            > </Box>
            <Box my={10}>
              <Text color={"text2"} sx={{fontSize: "4rem"}}>
                Invest on Big Disruptions
              </Text>
            </Box>
            <Box my={10}>
              <Text color={"color2"} sx={{fontSize: "1.8rem"}}>
                With convergence of financial and technological expertise
              </Text>
            </Box>
            <Button
              style={{
                textDecoration: 'none',
              }}
              as={AnchorLink}
              my={40}
              varient={"primary"}
              href={'#explore'} offset={120}>
              Explore
            </Button>
          </Box>
        </Grid>
      </Container>
      <Box
        bg={"black"}
        sx={{
          position: "absolute",
          width: "100vw",
          height: "100%",
          opacity: 0.7,
          zIndex: -1,
          top: 0,
        }}
      />
    </Box>
  );
}

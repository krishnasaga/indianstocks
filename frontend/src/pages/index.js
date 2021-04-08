import React from "react";
import { Box, Grid, Text, Link, Container, Button } from "theme-ui";
import { TopNav } from "../components/TopNav";
import introImage from "./background.jpg";

const Explorer = ({ children, ...remainingProps }) => {
  return (
    <Container>
      <Box {...remainingProps} py={20}>
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

export default () => {
  return (
    <Box>
      <TopNav />
      <Introbanner />
      <Box bg={"color5"}>
        <Container>
          <Grid py={100} columns={[1, 1, 2, 4]}>
            <Explorer>
              <a href={"/sectors"}>Explore Companies by Sector</a>
            </Explorer>
            <Explorer>
              <a href={"/sectors"}>Explore Companies by Sector</a>
            </Explorer>
            <Explorer>
              <a href={"/sectors"}>Explore Companies by Sector</a>
            </Explorer>
            <Explorer>
              <a href={"/sectors"}>Explore Companies by Sector</a>
            </Explorer>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

function Introbanner() {
  return (
    <Box
      bg={"black"}
      sx={{
        height: "100vh",
        background: `black url(${introImage}) fixed center`,
        position: "relative",
        filter: "light(1)",
        zIndex: 0,
      }}
    >
      <Container>
        <Grid>
          <Box>
            <Box
              sx={{
                height: "250px",
              }}
            ></Box>
            <Box my={10}>
              <Text color={"text2"} sx={{ fontSize: "2.8rem" }}>
                Invest on Big Disruptions
              </Text>
            </Box>
            <Box my={10}>
              <Text color={"color2"} sx={{ fontSize: "1.8rem" }}>
                With convergence of financial and technological expertise
              </Text>
            </Box>
            <Button my={40} varient={"primary"}>
              Explore
            </Button>
          </Box>
          <Box></Box>
        </Grid>
      </Container>
      <Box
        bg={"black"}
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: 0.7,
          zIndex: -1,
          top: 0,
        }}
      />
    </Box>
  );
}

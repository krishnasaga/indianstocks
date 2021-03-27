import {Box, Container, Grid, Link, Text} from "theme-ui";
import {AnimatedNumber} from "../Number";

import React from "react";

export const SectorBanner = ({name, intro, insights, backgroundImage}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: ["550px"],
        backgroundImage: `linear-gradient(to right,
          rgba(0,0,0,0.8),
          rgba(0,0,0,0.6),
          rgba(0,0,0,0.1),
          rgba(0,0,0,0.1)),url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid columns={[1, 2]}>
        <Box my={20} px={20} py={70}>
          <Text
            color={"text2"}
            variant="bold1"
            sx={{
              fontSize: 40,
            }}
          >
            {name.toUpperCase()}
          </Text>

          <Text
            as={"h2"}
            color={"color2"}
            variant="regular2"
            sx={{
              fontSize: 25,
            }}
          >
            {intro}
          </Text>
          <Grid columns={[2, 2]} py={[10, 70]}>
            {insights.map((insight) => {
              return (
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Text color={"color2"} variant="bold1" sx={{fontSize: 20}}>
                    {insight.name}
                  </Text>
                  <AnimatedNumber
                    color={"color2"}
                    variant="light2"
                    sx={{fontSize: "2rem"}}
                  >
                    {insight.number}
                  </AnimatedNumber>
                </Box>
              );
            })}
          </Grid>
        </Box>
        <Box sx={{textAlign: "center"}}></Box>
      </Grid>
    </Box>
  );
};

export function Subpages({name}) {
  return (
    <Box
      bg={"color4"}
      sx={{
        textAlign: "center",
        color: "color2",
      }}
    >
      <Container>
        <Grid columns={[4, 4, 4, 4]} align={"center"}>
          <Tab
            name={"Analysis"}
            href={`/sectors/${name}/complete-analysis-of-${name}-sector-in-india`}
          />
          <Tab
            name={"Companies"}
            href={`/sectors/${name}/all-companies-in-${name}-sector-india`}
          />
          <Tab
            name={"Investors"}
            href={`/sectors/${name}/top-investors-in-${name}-in-india`}
          />
          <Tab name={"News"} href={`/sectors/${name}/latest-news`}/>
        </Grid>
      </Container>
    </Box>
  );
}

function Tab({name, href}) {
  return (
    <Box
      p={2}
      sx={{
        cursor: "pointer",
      }}
    >
      <Link href={href}>
        <Text color={"color2"}> {name} </Text>
      </Link>
    </Box>
  );
}

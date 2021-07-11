import React from "react";
import {Box, Text,Container} from "theme-ui";
import {TopNav} from "../components/TopNav";
import {Footer} from "../components/Footer";
import {Helmet} from 'react-helmet';

export default ({
                  pageContext: {displayName, name, intro, insights = [], backgroundImage, companies},
                }) => (
  <Box>
    <Helmet>
      <title> Know about IPO of {name}, Price, Issue Date, minimum order quantity and subscribe for it | BigInvest </title>
    </Helmet>
    <TopNav/>
    <Container>
      <Box mt={100} sx={{
        height: '1000px'
      }}>
        <Text sx={{
          fontSize: [4]
        }}>
          {name}
        </Text>
      </Box>
    </Container>
    <Footer/>
  </Box>
)
;


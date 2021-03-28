import React from 'react';
import { Box, Grid, Link,Image, Text } from 'theme-ui';
import {TopNav} from "../components/TopNav";
import { SectorBanner, Subpages } from "../components/Sector";

export default ({ pageContext: { name,displayName,intro,insights = [],backgroundImage} }) =>
  <Box>
    <TopNav/>
    <SectorBanner
          name={displayName}
          intro={intro}
          insights={insights}
          backgroundImage={backgroundImage}/>
    <Subpages name={name} />
    <Box>
      <Grid>
        <Box>
          Hello
        </Box>
      </Grid>
    </Box>
  </Box>;

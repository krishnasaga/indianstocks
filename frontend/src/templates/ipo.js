import React from "react";
import {Box, Grid, Text} from "theme-ui";
import {TopNav} from "../components/TopNav";
import {Footer} from "../components/Footer";
import {SectorBanner} from "../components/Sector";
import {CompaniesTable} from "../components/Sector/companies-table";
import {Helmet} from 'react-helmet';
import {More} from '../components/Sector/More';
import {Paper} from '../components/Paper';
import {GraphLine} from "../components/GraphLine";

export default ({
                  pageContext: {displayName, name, intro, insights = [], backgroundImage, companies},
                }) => (
  <Box>
    <Helmet>
      <title> Know about IPO of {name} and subscribe for it | BigInvest </title>
    </Helmet>
    <TopNav/>

    <Box mt={20}>

    </Box>
    <Footer/>
  </Box>
)
;


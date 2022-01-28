import React, {useEffect, useState} from "react";
import {Box, Grid, Text} from "theme-ui";
import {TopNav} from "../components/TopNav";
import {Footer} from "../components/Footer";
import {SectorBanner} from "../components/Sector";
import {Helmet} from 'react-helmet';
import {Paper} from '../components/Paper';
import {GraphLine} from "../components/GraphLine";
import {WorldStatsTimeSeries} from '../components/Charts/TimeSeries/WorldStatsTimeSeries';
import { CONTENT_ROOT } from "gatsby-env-variables"

export default ({
                  pageContext: {displayName, name, intro, insights = [], backgroundImage, companies},
                }) => (
  <Box bg={'#F5F5F5'}>
    <Helmet>
      <title> Stats of {displayName || "electricity"} of india | BigInvest </title>
    </Helmet>
   {  false ? <TopNav/> : null }
    {0 ? <SectorBanner
      name={displayName}
      intro={intro}
      insights={insights}
      backgroundImage={backgroundImage}
    /> : null}

    <Grid

      columns={[1, 2]}
      pt={'100px'}
      mb={4}
      mx={[1, 1, 4, 4]}>
      <Box>
        <Text as={'h1'} sx={{fontSize: [3]}}>
          Top {displayName} companies in india by Market Capitalization
        </Text>
        <Text as={'p'} sx={{fontSize: [2]}}>
          Listed below are the top {displayName} companies in india. They are listed in size by market capitalization.
          To
          reorder the list, simply click on one of the options - such as 24h or 7d - to see the sector from a different
          perspective.
        </Text>
      </Box>
      <Box sx={{
        overflowX: 'scroll',
        minWidth: '100px',
        display: 'none'
      }} p={[1, 1]}>
        <Grid columns={[2]} sx={{minWidth: ['150%', '100%']}}>
          <Box as={Paper} p={2}>
            <Grid columns={[2]}>
              <Box>
                <GraphLine/>
              </Box>
              <Box>
                <Text as={'p'} sx={{fontSize: [1]}}>
                  reorder the list, simply click on one of the options -
                </Text>
              </Box>
            </Grid>
          </Box>
          <Box as={Paper} p={2}>
            <Grid columns={[2]}>
              <Box>
                <GraphLine/>
              </Box>
              <Box>
                <Text as={'p'} sx={{fontSize: [1]}}>
                  reorder the list, simply click on one of the options - such as 24h or 7d
                </Text>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </Grid>
    {/*<Box px={[0.5, 4]}>*/}
    {/*  <More/>*/}
    {/*</Box>*/}
    <Box
      my={4}
      mx={[1, 1, 4, 4]}
      sx={{
        borderRadius: 5,
        '-webkit-font-smoothing': 'antialiased',
        fontWeight: "600",
      }}
    >
      <StatsGrid name={name}/>


      {/*<CompaniesTable*/}
      {/*  columns={[{*/}
      {/*    Header: "#",*/}
      {/*    accessor: "id",*/}
      {/*  }, {*/}
      {/*    Header: "#",*/}
      {/*    accessor: "name",*/}
      {/*  }]}*/}
      {/*  data={companies || new Array(100).fill(1).map((value, index) => {*/}
      {/*    return {rank: index};*/}
      {/*  })}*/}
      {/*/>*/}


    </Box>
    <Footer/>
  </Box>
)
;

function ProductItem({name}) {
  return (
    <Grid
      columns={[2]}
      sx={{
        "::hover": {
          color: "red",
        },
      }}
    >
      <Box py={2}>
        <Text color={"secondary"}>{name}</Text>
      </Box>
    </Grid>
  );
}

const Chart = (props) => {
  return <Box>
    <Grid columns={[1]}>
      <Box p={3} sx={{}}>
        <Text p={3} pl={0}>{props.title}</Text>
        <Box>
          <WorldStatsTimeSeries {...props} />
        </Box>
      </Box>

    </Grid>
  </Box>;
}

function StatsGrid({name}) {
  const {data, loading, error} = useStatsPage({
    statsName: name
      .toLowerCase()
      .replace(/ /, '-')
  });
  return data ? data.grids.map((data, index) => {
    return <Grid key={index} {...data.props}>
      {
        data.children.map((data) => <Chart {...data.props} />)
      }
    </Grid>
  }) : null;
}

function useStatsPage({statsName}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${CONTENT_ROOT}/content/idea-stats/${statsName}.json`)
      .then(response => response.json())
      .then(data => {
        setData(data);
      }).catch(data => {
    });
  }, [])


  return {data, loading, error};
}


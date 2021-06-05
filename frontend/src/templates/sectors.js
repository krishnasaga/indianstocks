import React from "react";
import {Box, Grid, Text} from "theme-ui";
import {TopNav} from "../components/TopNav";
import {Footer} from "../components/Footer";
import {SectorBanner} from "../components/Sector";
import {CompaniesTable} from "../components/Sector/companies-table";
import {Helmet} from 'react-helmet';
import {More} from '../components/Sector/More';

export default ({
                  pageContext: {displayName, name, intro, insights = [], backgroundImage, companies},
                }) => (
  <Box>
    <Helmet>
      <title> Top {displayName} companies in india by market capitalization | BigInvest </title>
    </Helmet>
    <TopNav/>
    {0 ? <SectorBanner
      name={displayName}
      intro={intro}
      insights={insights}
      backgroundImage={backgroundImage}
    /> : null}
    <SectorFinancials/>

    <Box
      mt={'100px'}
      mb={4}
      mx={[1, 1, 4, 4]}
    >
      <Text as={'h1'}>
        Top {displayName} companies in india by Market Capitalization
      </Text>
      <Text as={'p'}>
        Listed below are the top {displayName} companies in india. They are listed in size by market capitalization. To
        reorder the list, simply click on one of the options - such as 24h or 7d - to see the sector from a different
        perspective.
      </Text>
    </Box>
    <Box px={[4]}>
      <More/>
    </Box>
    <Box
      my={4}
      mx={[1, 1, 4, 4]}
      sx={{
        borderRadius: 5,
        boxShadow: "0 3px 20px 0 rgb(0 77 165 / 7%)",
      }}
    >
      <CompaniesTable
        columns={[{
          Header: "#",
          accessor: "rank",
        }]}
        data={companies || new Array(100).fill(1).map((value, index) => {
          return {rank: index};
        })}
      />
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

const SectorFinancials = ({visible = false}) => {
  if (!visible) return null;

  return (
    <Grid
      p={20}
      columns={[1, 1, 2, 2]}
      sx={{
        alignItems: "center",
      }}
    >
      <Box>
        <Text as={"h2"} color={"primary"}>
          {" "}
          Disruptions{" "}
        </Text>
        <Box w={"100%"}>
          <ProductItem name={"DNA Sequencing"}/>
          <ProductItem name={"DNA Sequencing"}/>
          <ProductItem name={"DNA Sequencing"}/>
          <ProductItem name={"DNA Sequencing"}/>
          <ProductItem name={"DNA Sequencing"}/>
          <ProductItem name={"DNA Sequencing"}/>
          <ProductItem name={"DNA Sequencing"}/>
        </Box>
      </Box>
      <Box sx={{}}>
        <Text as={"h2"} color={"primary"}>
          {" "}
          Performance{" "}
        </Text>
        <Text py={20} as={"h3"} color={"primary"}>
          {" "}
          Current Market size{" "}
        </Text>
        <Text
          color={"secondary"}
          py={20}
          sx={{
            fontSize: "2rem",
          }}
        >
          $1 Trillion
        </Text>
        <Text py={20} as={"h3"} color={"primary"}>
          {" "}
          Expected market size by 2025{" "}
        </Text>
        <Text
          color={"secondary"}
          py={20}
          sx={{
            fontSize: "2rem",
          }}
        >
          $5 Trillion
        </Text>
      </Box>
    </Grid>
  );
};

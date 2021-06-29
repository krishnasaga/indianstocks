import React from "react";
import {Box, Container, Grid, Link, Text} from "theme-ui";
import {TopNav} from "../components/TopNav";
import {Footer} from "../components/Footer";
import {Helmet} from 'react-helmet';
import {Paper} from '../components/Paper';

export default ({
                  pageContext: {displayName, name, intro, insights = [], backgroundImage, companies},
                }) => (
  <Box bg={'#F5F5F5'} mt={0}>
    <Helmet>
      <title> Top companies in india by market capitalization | BigInvest </title>
    </Helmet>
    <TopNav/>

    <Box py={'100px'}>
      <Container px={[2,0]}>
        <Grid columns={[1, 4]} gap={4} as={'ul'} sx={{listStyle: 'none', padding: 0, margin: 0}}>
          {
            new Array(10).fill(10).map((data) => {
              return <Paper as={'li'} p={2} bg={'white'}>
                <Link href={'/'} sx={{
                  textDecoration: 'none',
                  color: 'initial',

                }}>
                  <Text sx={{
                    fontSize: [1]
                  }}>
                    companies in india by market capitalization
                    companies in india by market capitalization
                    companies in india by market capitalization
                    companies in india by market capitalization
                    companies in india by market capitalization
                    companies in india by market capitalization
                    companies in india by market capitalization
                  </Text>
                </Link>
              </Paper>;
            })
          }
        </Grid>
      </Container>
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

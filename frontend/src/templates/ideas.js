import React from "react";
import {Box, Container, Grid, Link, Text, Image, Heading} from "theme-ui";
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
              return <Paper as={'li'} p={0} bg={'white'}>
                <Link href={'/'} sx={{
                  textDecoration: 'none',
                  color: 'initial',

                }}>
                    <Image src={"https://image.shutterstock.com/image-illustration/abstract-glowing-virtual-neural-network-600w-1168141114.jpg"}></Image>
                  <Text p={2} sx={{
                    fontSize: [1],
                  }}>
                      <Heading>Sneha Sanam</Heading>
                    companies in india by market capitalization
                    companies in india by market capitalization
                  </Text>
                    <Image p={2} src={"https://image.shutterstock.com/image-vector/stock-exchange-vector-background-market-600w-1839270889.jpg"}></Image>
                  <Box sx={{
                      fontSize: "15px",
                  }}>
                      <Grid columns={2} p={2} >
                          <Box >
                              <Text >Market Cap</Text>
                              <Text>2000,500</Text>
                              <Text>One year change</Text>
                              <Text>40.89%</Text>
                          </Box>
                          <Box>
                              <Text>Companies</Text>
                              <Text>20</Text>
                          </Box>
                      </Grid>
                  </Box>
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

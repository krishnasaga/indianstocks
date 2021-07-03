import React from "react";
import {Box, Container, Grid, Image, Link, Text} from "theme-ui";
import {TopNav} from "../components/TopNav";
import {Footer} from "../components/Footer";
import {Helmet} from 'react-helmet';
import {Paper} from '../components/Paper';
import {EditorDock} from "../content-editor/EditorDock";

export default ({
                  pageContext: {
                    ideas = []
                  },
                }) => {
  return (<Box bg={'#F5F5F5'} mt={0}>
      <Helmet>
        <title> Top companies in india by market capitalization | BigInvest </title>
      </Helmet>
      <TopNav/>

      <Box py={'100px'}>
        <Container px={[2, 0]}>
          <Grid columns={[1, 4]} gap={4} as={'ul'} sx={{listStyle: 'none', padding: 0, margin: 0}}>
            {

              ideas.map((idea) => {
                return <Paper as={'li'} p={0} bg={'white'} sx={{fontWeight: "500",}}>
                  <Link href={'/'} sx={{
                    textDecoration: 'none',
                    color: 'initial',
                    fontSize: [1],

                  }}>
                    <Image src={"/information-technology.jpg.webp"}/>
                    <Text p={2} sx={{
                      fontSize: [1],
                    }}>
                      <Text sx={{
                        fontSize: "4",
                        fontWeight: "500",
                      }}>{idea.name}</Text>
                      <Text sx={{
                        fontSize: "13px",
                      }}>
                        companies in india by market capitalization
                        companies in india by market capitalization
                      </Text>

                    </Text>
                    <Image p={0} src={"/unknown.png"} sx={{width: "100%", paddingX: "3"}}/>
                    <Grid columns={2} p={3} sx={{paddingBottom: "20px", lineHeight: "1.2"}}>
                      <Box sx={{
                        width: "170px",
                      }}>
                        <Text sx={{
                          fontSize: "13px",
                        }}>Market Cap</Text>
                        <Text sx={{
                          fontWeight: "600",
                          fontSize: "15px",
                          paddingTop: "8px"
                        }}>
                          $2000,500
                        </Text>
                        <Text sx={{
                          fontWeight: "600",
                          fontSize: "15px",
                          display: "inline",
                          paddingRight: "5px",
                        }}>
                          1 year change
                        </Text>
                        <Text sx={{
                          fontWeight: "600",
                          fontSize: "15px",
                          color: "#16C784",
                          display: "inline",
                        }}>
                          40.89%
                        </Text>
                      </Box>
                      <Box width={"20%"}>
                        <Text sx={{
                          fontSize: "13px",
                        }}>
                          Companies
                        </Text>
                        <Text sx={{
                          fontWeight: "600",
                          fontSize: "15px",
                          paddingTop: "8px"
                        }}>
                          20
                        </Text>
                      </Box>
                    </Grid>
                  </Link>
                </Paper>;
              })
            }
          </Grid>
        </Container>
      </Box>
      <EditorDock open/>
      <Footer/>
    </Box>
  );
}



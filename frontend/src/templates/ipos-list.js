import React from "react";
import {Box, Container, Grid, Text} from "theme-ui";
import {TopNav} from "../components/TopNav";
import {Footer} from "../components/Footer";
import {Helmet} from 'react-helmet';
import {EditorDock} from "../content-editor/EditorDock";
import {IPOCard} from "../BComponents/IPOCard";

export default ({
                  pageContext: {
                    ipos = []
                  },
                }) => {
  return (<Box bg={'#F5F5F5'} mt={0}>
      <Helmet>
        <title> Upcoming IPOs in India | find all latest information about up coming IPOs in india | BigInvest </title>
      </Helmet>
      <TopNav/>

      <Box py={'100px'}>
        <Container px={[2, 0]}>
          <Text as={'h1'} sx={{
            fontWeight: [500],
            fontSize: [4],
            lineHeight: [4]
          }}>
            Upcoming IPOs in India
          </Text>
          <Grid columns={[1, 4]} gap={4} as={'ul'} sx={{listStyle: 'none', padding: 0, margin: 0}}>
            {

              ipos.map((idea) => {
                return <IPOCard as={'li'} ipo={idea} sx={{
                  width: 'unset',
                  margin: 0,
                  padding: 0
                }}/>;
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

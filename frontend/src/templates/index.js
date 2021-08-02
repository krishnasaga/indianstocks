import React from "react";
import {Box, Container, Grid, Text} from "theme-ui";
import {TopNav} from "../components/TopNav";
import introImage from "../pages/background.jpg";
import {Cards} from '../components/Cards';
import {Footer} from "../components/Footer";
import {IdeasSlider} from '../components/Home/IdeasSlider';
import {SectorsSlider} from '../components/Home/SectorsSlider';
import {IPOSlider} from '../BComponents/IPOSlider';

const Explorer = ({children, ...remainingProps}) => {
  return (
    <Container>
      <Box {...remainingProps} py={20} sx={{width: '100vw'}}>
        <Box
          bg={"color2"}
          h={[200]}
          p={20}
          sx={{
            boxShadow:
              "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);",
          }}
        >
          {children}
        </Box>
      </Box>
    </Container>
  );
};

export default ({
                  pageContext: {ideas, sectors, neftySectorIndexes, IPOs},
                }) => {
  return (
    <Box sx={{width: '100%', overflowX: 'hidden'}}>
      <TopNav/>
      <Introbanner/>

      <IPOSlider ideas={IPOs.map((data) => {
        return {

          image: {
          url: `https://source.unsplash.com/290x145/?${data.name.replace(/ /g, ',')
          }`},
          ...data}
      })} title={<>
        <Text as={'span'} sx={{fontSize: '24px', fontWeight: 400}}>IPOs</Text> <Text as={'span'}
                                            sx={{fontSize: [1]}}>Initial Public Offerings</Text></>} graphLine={false}/>

      <IdeasSlider ideas={ideas} title={'Big Ideas'}/>

      <SectorsSlider ideas={sectors} title={'Sectors'}/>


      <SectorsSlider ideas={neftySectorIndexes} title={'ETFs'}/>

      <SectorsSlider ideas={neftySectorIndexes} title={'Nefty Sectoral Indexes'}/>

      <SectorsSlider ideas={neftySectorIndexes} title={'Nefty Indexes'}/>


      { /**  <Box bg={"color5"}>
        <Container>
          <Box py={'4rem'} sx={{paddingLeft: '35px', paddingRight: '50px'}}>
             <Cards items={sectors}  />
          </Box>
        </Container>
      </Box>**/ }
      <Footer/>
    </Box>
  );
};

function Introbanner() {
  return (
    <Box
      bg={"color4"}
      sx={{
        height: "100%",
        width: "100vw",
        background: ['color5', `black url(${introImage}) fixed center`],
        position: "relative",
        filter: "light(1)",
        zIndex: 0,
      }}
    >
      <Container>
        <Grid>
          <Box p={[2, 2]} sx={{textAlign: 'left'}}>
            <Box
              sx={{
                height: ['70px', "100px"],
              }}
            > </Box>
            <Box>
              <Text as={'h1'} color={"text2"} sx={{fontSize: [4, "2rem"], fontWeight: 500}}>
                Invest on Big Disruptions
              </Text>
            </Box>
            <Box my={10}>
              <Text as={'h2'} color={"color2"} sx={{fontSize: [2], fontWeight: 500}}>
                With convergence of financial and technological expertise
              </Text>
            </Box>
            <Box my={10}>
              <Text as={'h2'} color={"color2"} sx={{fontSize: [1], fontWeight: 500}}>
                Disclaimer: We are a team of software engineers developing this application to visualise information
                related to market and technology adoption. There is no warranty on any information presented in this
                site. It is may not be accurate and it may contain errors as a result of bugs in the code.
              </Text>
            </Box>
          </Box>
        </Grid>
      </Container>
      <Box
        bg={"black"}
        sx={{
          position: "absolute",
          width: "100vw",
          height: "100%",
          opacity: 0.7,
          zIndex: -1,
          top: 0,
        }}
      />
    </Box>
  );
}

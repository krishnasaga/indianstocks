import {Box, Container, Image, Link, Text,Grid} from "theme-ui";
import {Paper} from "../components/Paper";
import {EditorDock} from "../content-editor/EditorDock";
import React from "react";

const InfoText = ({text,value,valueSx,sx,...remainingProps}) => {
  return <Box {...remainingProps} >
    <Text sx={{
      fontSize: [1],
      fontWeight: 500,
      ...sx
    }}>
      {text}
    </Text>
    <Text
      sx={{
        fontSize: [1],
        fontWeight: 600,
        ...sx
      }}
      {...remainingProps}
    >
      {value}
    </Text>
  </Box>;
};

export const IPOSlider = ({ideas = [], graphLine = true, title}) => {
  return <Box bg={'#F5F5F5'} mt={0}>
    <Box>
      <Container>
        <Text
          px={[2, 0]}
          py={4}
          sx={{
            fontSize: [4]
          }}>
          {title}
        </Text>
      </Container>
      <Container px={[2, 0]} sx={{
        overflowX: 'auto'
      }}>
        <Box as={'ul'}
             sx={{
               listStyle: 'none',
               padding: 0,
               margin: 0,
               whiteSpace: 'nowrap'
             }}>
          {

            ideas.map((idea) => {
              const image = idea.image || {
                url: "/information-technology.jpg.webp"
              };

              return <Paper as={'li'} p={0} mr={4} mb={4} bg={'white'}
                            sx={{
                              fontWeight: "500",
                              display: 'inline-block',
                              width: '290px'
                            }}>
                <Link href={`/ipos/${idea.name.trim().toLowerCase().replace(/ /g, '-')}`} sx={{
                  whiteSpace: 'initial',
                  textDecoration: 'none',
                  color: 'initial',
                  fontSize: [1],

                }}>
                  <Image src={image.url}/>
                  <Text p={2} sx={{
                    fontSize: [1],
                  }}>
                    <Text sx={{
                      fontSize: [4],
                      fontWeight: "500",
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      overflow: 'hide'
                    }}>{idea.name}</Text>

                    <Text sx={{
                      fontSize: "13px",
                    }}>
                      companies in india by market capitalization
                      companies in india by market capitalization
                    </Text>
                    <Grid columns={[2]} mt={2}>
                      <InfoText text={'Start Date'} value={'14 Jul 2021'} color={'green'}/>
                      <InfoText text={'Closing Date'} value={'16 Jul 2021'} color={'red'}/>
                      <InfoText text={'Price range'} value={'$72 – $76'} color={'orange'}/>
                      <InfoText text={'Minimum order quantity'} value={'195'} color={'orange'}/>
                    </Grid>
                  </Text>
                  {graphLine ? <Image p={0} src={"/unknown.png"} sx={{width: "100%", paddingX: "3"}}/> : null}

                </Link>
              </Paper>;
            })
          }
        </Box>
      </Container>
    </Box>
    <EditorDock open/>
  </Box>;
}

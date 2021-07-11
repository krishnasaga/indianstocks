import {Box, Container, Grid, Link, Text} from "theme-ui";
import {EditorDock} from "../content-editor/EditorDock";
import React from "react";
import {IPOCard} from "./IPOCard";


export const IPOSlider = ({ideas = [], graphLine = true, title}) => {
  return <Box bg={'#F5F5F5'} mt={0}>
    <Box>
      <Container>
        <Grid columns={['1fr 100px']} sx={{
          alignItems: 'center'
        }}>
          <Box >
            <Text
              px={[2, 0]}
              sx={{
                fontSize: [4],
                lineHeight: [4]
              }}>
              {title}
            </Text>
          </Box>
          <Box  sx={{textAlign: 'right'}}>
            <Link
            href={'/ipos'}
            sx={{
              cursor: 'pointer'
            }}> <Text
              color={'blue'}
              px={[2, 0]}
              sx={{
                fontSize: [1],
                lineHeight: [5]
              }}
            > View All</Text> </Link>
          </Box>
        </Grid>
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

              return <IPOCard idea={idea}/>;
            })
          }
        </Box>
      </Container>
    </Box>
    <EditorDock open/>
  </Box>;
}

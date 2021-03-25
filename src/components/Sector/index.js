import {Box, Grid, Image, Text,Container,Link} from "theme-ui";
import healthCareImage from "../../images/health-insurance.png";
import React from "react";

export const SectorBanner = ({name, intro, insights}) => {
  return <Box sx={{width: '100%', height: ['550px']}} bg={'black'}>
    <Grid columns={[1, 2]}>
      <Box my={20} px={20} py={70}>
        <Text color={'text2'} sx={{
          fontSize: 40
        }}>
          {name.toUpperCase()}
        </Text>
        <Text as={'h2'} color={'text3'} sx={{
          fontSize: 25
        }}>
          {intro}
        </Text>
        <Grid columns={[2, 2]} py={70}>
          {insights.map((insight) => {
            return <Box sx={{
              textAlign: 'center'
            }}>
              <Text color={'text3'} sx={{fontSize: 20}}>{insight.name}</Text>
              <Text color={'text2'} sx={{fontSize: 25}}>{insight.number}</Text>
            </Box>;
          })}
        </Grid>
      </Box>
      <Box sx={{textAlign: 'center'}}>
        <Image src={healthCareImage} sx={{
          filter: 'invert() hue-rotate(180deg)',

        }}/>
      </Box>
    </Grid>

  </Box>;
}

export function Subpages({name}) {
  return <Box bg={'color4'} sx={{
    textAlign: 'center',
    color: 'color2',
  }}>
    <Container>
      <Grid columns={[4, 4, 4, 4]} align={'center'}>
      <Tab name={'Analysis'} href={`/sectors/${name}/complete-analysis-of-${name}-sector-in-india`} />
      <Tab name={'Companies'} href={`/sectors/${name}/all-companies-in-${name}-sector-india`} />
      <Tab name={'Investors'} href={`/sectors/${name}/top-investors-in-${name}-in-india`} />
      <Tab name={'News'} href={`/sectors/${name}/latest-news`} />
    </Grid>
    </Container>
  </Box>;
}

function Tab({name,href}) {
  return <Box p={2} sx={{
    cursor: 'pointer'
  }}>
    <Link href={href}><Text color={'color2'}> {name} </Text></Link>
  </Box>;
}

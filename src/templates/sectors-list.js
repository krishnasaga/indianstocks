import React from 'react';
import { Box,Grid,Text,Container,Link } from 'theme-ui';
import { GraphLine } from '../components/GraphLine';
import { TopNav } from '../components/TopNav';

export default ({pageContext: { sectors }}) =>
  <Box>
    <TopNav/>
  <Container my={'70px'}>
    <Box  p={20} >
      <Grid columns={[2]}>
        <Box
          sx={{
            textAlign: 'left',
            fontSize: '1.5rem',
            weight: 'normal'
          }}
        >
          All Sectors
        </Box>
        <Box sx={{
          fontSize: '1.5rem',
          textAlign: 'right',
          weight: 'normal'
        }}>
          <Link>More</Link>
        </Box>
      </Grid>
    </Box>
    <Grid
      columns={[1,2,4,7]} p={20} >
  {
    sectors.map((data)=>{
      return <Box
          bg={'background'}
          color={'primary'}
          p={20}
          sx={{
            textAlign: 'center',
            boxShadow: '0 3px 20px 0 rgb(0 77 165 / 7%)',
            height: 'auto',
            textDecoration: 'none',
            color: 'initial',
          }}
       >
          <Link key={data.name} href={`/sectors/${data.name}`}
                style={{
                  textDecoration: 'none',
                }}
          >
            <Text
                  sx={{
                    fontSize: '1.2rem',
                    color: 'black',
                    fontFamily: "'Open Sans'"
                  }}

          >
              {data.displayName}
            </Text>
          </Link>
          <Text py={40} as={'h4'}>{+445}</Text>
          <GraphLine/>
        </Box>;

    })
  }
</Grid>
  </Container>  </Box>;

import React from "react";
import {Box, Button, Container, Grid, Image, Text} from "theme-ui";
import {TopNav} from "../components/TopNav";
import {Footer} from "../components/Footer";
import {Helmet} from 'react-helmet';

export default ({
                  pageContext: {displayName, name, intro, insights = [], backgroundImage, companies},
                }) => (
  <Box>
    <Helmet>
      <title> Know about IPO of {name}, Price, Issue Date, minimum order quantity and subscribe for it |
        BigInvest </title>
    </Helmet>
    <TopNav/>
    <Container>
      <Box mt={100} sx={{
        height: '1000px'
      }}>

        <Grid columns={[1]}>
          <Box>
            <Grid columns={[1, '4fr 2fr 2fr']}>
              <Box>
                <Text sx={{
                  fontSize: [5]
                }}>
                  {name}
                </Text>
              </Box>
              <Box>

                <Grid columns={[4]} gap={[0]} sx={{
                  textAlign: 'center',
                }}>
                  <Text sx={{
                    fontSize: [4],
                    fontWeight: 300
                  }}>05</Text>
                  <Text sx={{
                    fontSize: [4],
                    fontWeight: 300
                  }}>10</Text>
                  <Text sx={{
                    fontSize: [4],
                    fontWeight: 300
                  }}>05</Text>
                  <Text sx={{
                    fontSize: [4],
                    fontWeight: 300
                  }}>10</Text>
                </Grid>
                <Grid columns={[4]} sx={{
                  textAlign: 'center',
                  fontSize: [1]
                }}>
                  <Text sx={{
                    fontSize: [1]
                  }}>Days</Text>
                  <Text sx={{
                    fontSize: [1]
                  }}>Months</Text>
                  <Text sx={{
                    fontSize: [1]
                  }}>Minutes</Text>
                  <Text sx={{
                    fontSize: [1]
                  }}>Seconds</Text>
                </Grid>
              </Box>
              <Box>

              </Box>
            </Grid>
          </Box>
          <Box sx={{
            height: '500px'
          }}>
            <Box mt={[4]}>
              <Text sx={{
                fontSize: [3],
                fontWeight: 500,
                lineHeight: 2
              }}>IPO Details</Text>
              <Box>
                <Grid columns={[2, 4]}>
                  <IpoDetailsItem/>
                  <IpoDetailsItem/>
                  <IpoDetailsItem/>
                  <IpoDetailsItem/>
                  <IpoDetailsItem/>
                  <IpoDetailsItem/>
                </Grid>
              </Box>
            </Box>
          </Box>
          <Box>
            <Text as={'h2'}>You can apply at</Text>
            <Markets/>
          </Box>
        </Grid>
        <Grid>
          <Box>
            <Videos/>
          </Box>
        </Grid>
      </Box>
    </Container>
    <Footer/>
  </Box>
)
;

const Markets = () => {
  return <Box>
    {[
      'zerodha',
      'angelbroking',
      'angelbroking',
      'angelbroking',
      'angelbroking',
      'angelbroking',
      'hdfc',
      'icicidirect'].map((value) => {
      return <Box sx={{
        cursor: 'pointer',
        borderBottom: '1px solid #e5e5e5',
        '&:hover': {
          background: ['grey']
        }
      }}>
        <Grid columns={[2]} p={[2]} bg={{
          '&::hover': 2
        }} sx={{
          borderBottom: '1px solid #fefefe'
        }}><Box sx={{
          height: ['40px'],
          width: '150px',
          textAlign: 'left'
        }}>
          <Image alt={value} src={`/brokerage-icons/${value}.png`} sx={{
            objectFit: 'contain',
            width: '100%',
            height: '100%'
          }}/>
        </Box>
          <Box>
            <Button>
              Apply Now
            </Button>
          </Box>
        </Grid>
      </Box>
    })}
  </Box>
}

const Videos = () => {
  return <Box>

  </Box>
}

const IpoDetailsItem = () => {
  return <Box>
    <Text sx={{
      fontSize: [2]
    }}>Lot Size </Text>
    <Text sx={{
      fontSize: [1]
    }}>193</Text>
  </Box>
}

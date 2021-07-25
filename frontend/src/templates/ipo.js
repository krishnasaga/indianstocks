import React from "react";
import { Box, Button, Container, Grid, Image, Text } from "theme-ui";
import { TopNav } from "../components/TopNav";
import { Footer } from "../components/Footer";
import { Helmet } from 'react-helmet';
import { BiLink, BiLinkExternal, FcDocument } from "react-icons/all";
import { useCountDown } from "../components/UseCountDown";

export default ({
  pageContext: { displayName, name, intro, insights = [], backgroundImage, companies },
}) => (
  <Box>
    <Helmet>
      <title> Know about IPO of {name}, Price, Issue Date, minimum order quantity and subscribe for it |
        BigInvest </title>
    </Helmet>
    <TopNav />
    <Container>
      <Box mt={100} sx={{
        height: '1000px'
      }}>

        <Grid columns={[1]}>
          <Box>
            <Grid columns={[1, '4fr 2fr 2fr']}>
              <Box>
                <Grid columns={[1, '110px 1fr']} sx={{
                  alignItems: 'center'
                }}>
                  <Logo />
                  <Text sx={{
                    fontSize: [5],
                    textAlign: ['center', 'left']
                  }}>
                    {name} IPO
                  </Text>
                </Grid>
              </Box>
              <Box>
                <ShowCountDown targetDate="2021-08-28T16:20:32Z" />
              </Box>
              <Box px={2}>

              </Box>
            </Grid>
            <Grid columns={[1, '4fr 2fr 1fr']} mt={[5]}>
              <Box>
                <Box sx={{ textAlign: ['center', 'left'] }}>
                  <ExternalLink href={"https://www.zomato.com/"}>Website</ExternalLink>
                  <ExternalLink href={"https://twitter.com/zomato"}>Twitter</ExternalLink>
                  <ExternalLink href={'https://en.wikipedia.org/wiki/Zomato'}>Wikipedia</ExternalLink>
                  <DocLink
                    href={'https://www.sebi.gov.in/filings/public-issues/apr-2021/zomato-limited-drhp_49956.html'}>RHP
                    PDF</DocLink>
                </Box>
              </Box>
            </Grid>
          </Box>
          <Box px={[2, 0]}>
            <Box mt={[4]}>
              <Text sx={{
                fontSize: [3],
                fontWeight: 500,
                lineHeight: 2
              }}>IPO Details</Text>
              <Box>
                <Grid columns={[2, 4]}
                  gap={[4]}
                  sx={{
                    alignItems: 'center'
                  }}
                >
                  <IpoDetailsItem text={'Bidding Start Date'} value={'14 Jul 2021'} />
                  <IpoDetailsItem text={'Bidding End Date'} value={'14 Jul 2021'} />
                  <IpoDetailsItem text={'Lot Size'} value={'195'} />
                  <IpoDetailsItem text={'Price Range'} value={'72 - 76'} />
                  <IpoDetailsItem text={'Issue Size'} value={'9375 Cr'} />
                  <IpoDetailsItem />
                </Grid>
              </Box>
            </Box>
            <About mt={10} sx={{}} name={name} />
          </Box>
          <Box px={[2, 0]}>
            <Text as={'h2'} sx={{
              fontSize: [3],
              fontWeight: 500
            }}>Can be applied in bellow platforms</Text>
            <Markets />
          </Box>
        </Grid>
        <Grid>
          <Box px={[2, 0]}>
            <Videos />
          </Box>
        </Grid>
      </Box>
    </Container>
    <Footer />
  </Box>
)
  ;

const ShowCountDown = ({ targetDate = '' }) => {
  const [day, hours, minutes, seconds] = useCountDown({targetDate})
  return (
    <>
      <Grid columns={[4]} gap={[0]} sx={{
        textAlign: 'center',
      }}>
        <Text sx={{
          fontSize: [4],
          fontWeight: 300
        }}>{day}</Text>
        <Text sx={{
          fontSize: [4],
          fontWeight: 300
        }}>{hours}</Text>
        <Text sx={{
          fontSize: [4],
          fontWeight: 300
        }}>{minutes}</Text>
        <Text sx={{
          fontSize: [4],
          fontWeight: 300
        }}>{seconds}</Text>
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
        }}>Hours</Text>
        <Text sx={{
          fontSize: [1]
        }}>Minutes</Text>
        <Text sx={{
          fontSize: [1]
        }}>Seconds</Text>
      </Grid>
    </>
  )
}

const Markets = () => {
  return <Box>
    {[
      'zerodha',
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
              }} />
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

const About = ({ name, ...props }) => {
  return <Box {...props}>
    <Text as={'h2'} sx={{
      fontSize: [3],
      fontWeight: 500
    }}
    >
      About {name}
    </Text>
    <Box as={'p'} color={'black'} sx={{
      fontWeight: 300
    }}>
      Zomato is an Indian multinational restaurant aggregator and food delivery company founded by Pankaj
      Chaddah and Deepinder Goyal in 2008. Zomato provides information, menus and user-reviews of restaurants as
      well as food delivery options from partner restaurants in select cities. As of 2019, the service is available
      in 24 countries and in more than 10,000 cities.
    </Box>
  </Box>
}

const IpoDetailsItem = ({ text, value }) => {
  return <Box py={[2]}>
    <Text sx={{
      fontSize: [2],
      fontWeight: 500
    }}>{text}</Text>
    <Text sx={{
      fontSize: [2],
    }}>{value}</Text>
  </Box>
}


const ExternalLink = ({ children, ...remainingProps }) => {
  return <Button as={'a'}
    mr={[2]}
    px={[2]} py={[0.5]} m={[1]} bg={'#F0F2F5'} color={'black'} target={'_blank'} sx={{
      fontSize: [1],
      textAlign: 'left',
    }} variant={'outline'} {...remainingProps}>
    <BiLink style={{
      verticalAlign: 'middle'
    }}
    />
    &nbsp;
    {children}
    &nbsp;
    <BiLinkExternal style={{
      verticalAlign: 'middle'
    }} />
  </Button>
}

const DocLink = ({ children, ...remainingProps }) => {
  return <Button as={'a'}
    mr={[2]}
    px={[2]}
    py={[0.5]}
    m={[1]}
    bg={'#F0F2F5'} color={'black'} target={'_blank'} sx={{
      fontSize: [1],
      textAlign: 'left',
    }} variant={'outline'} {...remainingProps}>
    <FcDocument style={{
      verticalAlign: 'middle'
    }}
    />
    &nbsp;
    {children}
    &nbsp;
    <BiLinkExternal style={{
      verticalAlign: 'middle'
    }} />
  </Button>
}

const Logo = () => {
  return <Box sx={{
    width: '100px',
    height: '100px',
    borderRadius: '5px',
    margin: ['0 auto', 'initial'],
    background: 'url("/company-icons/zomato.png")',
    backgroundSize: 'cover'
  }}>

  </Box>
}

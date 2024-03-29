import React from "react";
import {Box, Button, Container, Grid, Text} from "theme-ui";
import {TopNav} from "../components/TopNav";
import {Footer} from "../components/Footer";
import {Helmet} from 'react-helmet';
import {BiLink, BiLinkExternal, FcDocument} from "react-icons/all";
import {useCountDown} from "../components/UseCountDown";
import {format} from 'date-fns';
import {Image} from "../components/Image";
import {FakeLogo} from '../components/FakeLogo';

export default ({
                  pageContext: {
                    displayName,
                    name,
                    intro,
                    insights = [],
                    backgroundImage,
                    companies,
                    ipo
                  },
                }) => (
  <Box>
    <Helmet>
      <title> Know about {name} IPO , Price, Issue Date, and other latest updates |
        Where to apply for {name} IPO ?
        BigInvest </title>
    </Helmet>
    <TopNav/>
    <Container>
      <Box mt={100}>

        <Grid columns={[1]}>
          <Box>
            <Grid columns={[1, '4fr 2fr 2fr']}>
              <Box>
                <Grid columns={[1, '110px 1fr']} sx={{
                  alignItems: 'center'
                }}>
                  <Logo ipo={{name}}/>
                  <Text sx={{
                    fontSize: [5],
                    textAlign: ['center', 'left']
                  }}>
                    {name} IPO
                  </Text>
                </Grid>
              </Box>
              <Box>
                <ShowCountDownWrapper startDate={ipo.startDate} endDate={ipo.endDate}/>
              </Box>
              <Box px={2}>

              </Box>
            </Grid>
            <Grid columns={[1, '4fr 2fr 1fr']} mt={[5]}>
              <Box>
                <Box sx={{textAlign: ['center', 'left']}}>
                  <ExternalLink href={ipo.website}>Website</ExternalLink>
                  <ExternalLink href={ipo.twitter}>Twitter</ExternalLink>
                  <ExternalLink href={ipo.wikipedia}>Wikipedia</ExternalLink>
                  <DocLink
                    href={ipo.DRHP}>
                    RHP PDF</DocLink>
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
                  <IpoDetailsItem text={'Bidding Start Date'} value={format(new Date(ipo.startDate), 'dd MMM yyyy')}/>
                  <IpoDetailsItem text={'Bidding End Date'} value={format(new Date(ipo.endDate), 'dd MMM yyyy')}/>
                  <IpoDetailsItem text={'Lot Size'} value={ipo.lotSize}/>
                  <IpoDetailsItem text={'Price Range'} value={
                    ipo.minimumOrderQuantityBase
                      ? ` ${ipo.minimumOrderQuantityBase || '-'} – ${ipo.minimumOrderQuantityCutoff || '-'}`
                      : 'Unknown'}/>
                  <IpoDetailsItem text={'Issue Size'} value={ipo.issueSize + ' Cr'}/>
                  <IpoDetailsItem/>
                </Grid>
              </Box>
            </Box>
            <About mt={10} sx={{}} name={name} ipo={ipo}/>
          </Box>
          <Box px={[2, 0]}>
            <Text as={'h2'} sx={{
              fontSize: [3],
              fontWeight: 500
            }}>Apply {name} IPO with below platforms</Text>
            <Markets/>
          </Box>
        </Grid>
        <Grid>
          <Box px={[2, 0]}>
            <Videos/>
          </Box>
        </Grid>
      </Box>
    </Container>
    <Footer/>
  </Box>
)
;

const ShowCountDownWrapper = ({startDate = '', endDate = ''}) => {
  let message = '',
    date = '',
    showtimer = true,
    today = new Date().getTime();
  if (new Date(startDate).getTime() > today) {
    message = 'IPO starts in'
    date = startDate
    // ipo about to start
  } else if (new Date(endDate) >= today) {
    // ipo in progress
    message = 'IPO ends in'
    date = endDate
  } else {
    message = (startDate && endDate) ? 'CLOSED' : 'UNKNOWN'
    showtimer = false;
  }
  if (showtimer) {
    return (
      <>
        <Grid columns={[1]} sx={{
          textAlign: 'center',
          fontSize: [2]
        }}>
          <Text sx={{
            fontSize: [2]
          }}>{message}</Text>
        </Grid>
        <ShowCountDown targetDate={date}/>
      </>
    )
  } else {
    return (<Box
      sx={{
        border: '8px solid red',
        borderRadius: '10px',
        fontSize: [5],
        width: 'fit-content',
        transform: 'rotateZ(348deg)',
        opacity: '0.7',
        fontWeight: 'bold',
      }}>
      <Text color={'red'}
            sx={{
              fontSize: [6]
            }}>
        {message}
      </Text>
    </Box>)
  }
}

const ShowCountDown = ({targetDate = ''}) => {
  const [day, hours, minutes, seconds] = useCountDown({targetDate})
  return (
    <>
      <Grid columns={[4]} gap={[0]} sx={{
        textAlign: 'center',
      }}>
        <Text sx={{
          fontSize: [4],
          fontWeight: 700
        }}>{day}</Text>
        <Text sx={{
          fontSize: [4],
          fontWeight: 700
        }}>{hours}</Text>
        <Text sx={{
          fontSize: [4],
          fontWeight: 700
        }}>{minutes}</Text>
        <Text sx={{
          fontSize: [4],
          fontWeight: 700
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
  return <Box my={20}>
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

const About = ({name, ipo, ...props}) => {
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
      {ipo.description ? ipo.description : ''}
    </Box>
  </Box>
}

const IpoDetailsItem = ({text, value}) => {
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


const ExternalLink = ({children, href, ...remainingProps}) => {
  return <Button as={'a'}
                 mr={[2]}
                 px={[2]}
                 py={[0.5]}
                 m={[1]}
                 bg={'#F0F2F5'}
                 color={'black'}
                 target={'_blank'}
                 sx={{
                   opacity: href ? 1 : 0.2,
                   pointerEvents: !href
                     ? 'none'
                     : 'initial',
                   fontSize: [1],
                   textAlign: 'left',
                 }} variant={'outline'} href={href} {...remainingProps}>
    <BiLink style={{
      verticalAlign: 'middle'
    }}
    />
    &nbsp;
    {children}
    &nbsp;
    <BiLinkExternal style={{
      verticalAlign: 'middle'
    }}/>
  </Button>
}

const DocLink = ({children,href, ...remainingProps}) => {
  return <Button as={'a'}
                 mr={[2]}
                 px={[2]}
                 py={[0.5]}
                 m={[1]}
                 bg={'#F0F2F5'} color={'black'} target={'_blank'} sx={{
    opacity: href ? 1 : 0.2,
    pointerEvents: !href
      ? 'none'
      : 'initial',
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
    }}/>
  </Button>
}

const Logo = ({ipo}) => {
  return <Box sx={{
    width: '100px',
    height: '100px',
    borderRadius: '10px',
    margin: ['0 auto', 'initial'],
    backgroundSize: 'cover',
    border: '1px solid #e5e5e5'
  }}>
    <Image src={`/ipo-logos/${ipo.name.replace(/ /g, '-').toLowerCase()}.png`}
           width={"100%"}
           fallback={<FakeLogo
             name={ipo.name}
             p={2}
             sx={{
               height: 'inherit',
               fontSize: [6],
               textAlign: 'center'
             }}
           />}
    />
  </Box>
}

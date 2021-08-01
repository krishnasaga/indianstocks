import {Box, Grid, Link, Text} from "theme-ui";
import {Paper} from "../components/Paper";
import {Image} from "../components/Image";
import React from "react";
import {format} from 'date-fns'

export const InfoText = ({text, value, valueSx, sx, ...remainingProps}) => {
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


export const IPOCard = ({ipo, sx, ...remainingProps}) => {

  const image = ipo.image || {
    url: "/information-technology.jpg.webp"
  };

  return (<Paper as={'li'} p={0} mr={4} mb={4} bg={'white'}
                 sx={{
                   fontWeight: "500",
                   display: 'inline-block',
                   width: '290px',
                   position: 'relative',
                   ...sx
                 }}
                 {...remainingProps}
  >
    {
      new Date(ipo.endDate) < Date.now()
      ? <ClosedStamp/>
      : null
    }
    <Link href={`/ipos/${ipo.name.trim().toLowerCase().replace(/ /g, '-')}`} sx={{
      whiteSpace: 'initial',
      textDecoration: 'none',
      color: 'initial',
      fontSize: [1],

    }}>

      <Box p={2} sx={{
        fontSize: [1],
      }}>
        <Grid columns={'1fr 2fr'}>
          <Logo ipo={ipo}/>
          <Text sx={{
            fontSize: [2],
            fontWeight: "500",
            overflow: 'hide'
          }}>{ipo.name}
          </Text>
        </Grid>


        <Grid columns={[2]} mt={2}>
          <InfoText text={'Start Date'} value={format(new Date(ipo.startDate), 'dd MMM yyyy')} color={'green'}/>
          <InfoText text={'Closing Date'} value={format(new Date(ipo.endDate), 'dd MMM yyyy')} color={'red'}/>
          <InfoText text={'Price range'}
                    value={ipo.minimumOrderQuantityBase
                      ? ` ${ipo.minimumOrderQuantityBase || '-'} – ${ipo.minimumOrderQuantityCutoff || '-'}`
                      : 'Unknown'}
                    color={'orange'}/>
          <InfoText text={'Minimum order quantity'} value={ipo.lotSize || 'Unknown'} color={'orange'}/>
        </Grid>
      </Box>

    </Link>
  </Paper>)
}

const Logo = ({ipo}) => {
  return <Box sx={{
    width: '100px',
    height: '100px',
    borderRadius: '20px',
    border: '1px solid #e5e5e5',
    margin: ['0 auto', 'initial'],
    backgroundSize: 'cover'
  }}>
    <Image src={`/ipo-logos/${ipo.name.replace(/ /g,'-').toLowerCase()}.png`}
           width={"100%"}
           fallback={<Box sx={{
             width: '100%',
             height: '100%',
             textAlign: 'center',
             verticalAlign: 'middle',
           }}>
             <Text
               p={2}
               sx={{
               fontSize: [6],
               verticalAlign: 'middle',

             }}>{ipo.name[0].toUpperCase()}</Text>
           </Box>}

    />
  </Box>
}

const ClosedStamp = () => {
  return <Box

    color={'red'}
    sx={{
    position: 'absolute',
    left: '50%',
    top: '50%',
    border: '8px solid red',
    borderRadius: '10px',
    transform: 'rotateZ(-45deg) translate(-50%,-50%)',
    transformOrigin: '0% 0%',
    fontSize: [6],
    fontWeight: 'bold',
    opacity: 0.5,
  }}>
    <Text color={'red'}
          sx={{
      fontSize: [6]
    }}>
      CLOSED
    </Text>
  </Box>
}

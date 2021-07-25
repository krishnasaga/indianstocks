import {Box, Grid, Image, Link, Text} from "theme-ui";
import {Paper} from "../components/Paper";
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
                   ...sx
                 }}
                 {...remainingProps}
  >
    <Link href={`/ipos/${ipo.name.trim().toLowerCase().replace(/ /g, '-')}`} sx={{
      whiteSpace: 'initial',
      textDecoration: 'none',
      color: 'initial',
      fontSize: [1],

    }}>
      <Image src={image.url} sx={{
        width: '100%'
      }}/>
      <Text p={2} sx={{
        fontSize: [1],
      }}>
        <Text sx={{
          fontSize: [4],
          fontWeight: "500",
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hide'
        }}>{ipo.name}</Text>

        <Grid columns={[2]} mt={2}>
          <InfoText text={'Start Date'} value={format(new Date(ipo.startDate), 'dd MMM yyyy')} color={'green'}/>
          <InfoText text={'Closing Date'} value={format(new Date(ipo.endDate), 'dd MMM yyyy')} color={'red'}/>
          <InfoText text={'Price range'}
                    value={ipo.minimumOrderQuantityBase
                      ?
                      ` ${ipo.minimumOrderQuantityBase || '-'} – ${ipo.minimumOrderQuantityMax || '-'}`
                      : 'Unknown'}
                    color={'orange'}/>
          <InfoText text={'Minimum order quantity'} value={ipo.lotSize || 'Unknown'} color={'orange'}/>
        </Grid>
      </Text>

    </Link>
  </Paper>)
}

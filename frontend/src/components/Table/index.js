import React, {useState} from 'react';
import {Box, Button, Grid, Image, Text} from 'theme-ui';
import './index.css';
import {AiOutlineStar} from 'react-icons/ai';

function ToolTip({children, ...remainingProps}) {
  const [isShown, setIsShown] = useState(false);

  return (
    <Box className="App">
      <Button sx={{
        color: "lightgrey",
        padding: '0',
        position: "relative",
        zIndex: "0",
        background: "none",
        ':hover': {
          color: "orange",
          cursor: "pointer",
        }
      }}
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}>
        <AiOutlineStar size={16}/>
      </Button>
      {isShown && (
        <Text sx={{
          clipPath: "polygon(0 0, 100% 0%, 100% 75%, 55% 75%, 50% 100%, 45% 75%, 0% 75%)",
          color: "white",
          background: "black",
          position: 'absolute',
          zIndex: "10",
          fontSize: "0.8rem",
          padding: "5px 5px 15px 5px",
          borderRadius: "6px",
        }}>
          Add to Main Watchlist
        </Text>
      )}
    </Box>
  );
}

const StickyColStar = () => {
  return (
    <Box as={'td'} sx={{position: 'sticky', left: 0}}>
      <Grid sx={{
        gridAutoFlow: "column",
        alignItems: "center",
        justifyContent: "start",
      }}>
        {/*<Button sx={{*/}
        {/*  color: "lightgrey",*/}
        {/*  padding: '0',*/}
        {/*  ':hover': {*/}
        {/*    color: "orange",*/}
        {/*    cursor: "pointer",*/}
        {/*  }*/}
        {/*}}>*/}
        {/*  <AiOutlineStar size={18}/>*/}
        {/*</Button>*/}
        <ToolTip></ToolTip>
      </Grid>
    </Box>
  )
}

const StickyColNumber = ({children}) => {
  return (
    <Box as={'td'} sx={{position: 'sticky', left: "30px"}}>
      <Grid sx={{
        gridAutoFlow: "column",
        alignItems: "center",
        justifyContent: "start",
      }}>
        <Text sx={{
          color: "grey",
          fontSize: "0.8rem",
        }}>
          {children}
        </Text>
      </Grid>
    </Box>
  )
}

const StickyColName = ({children}) => {
  return (
    <Box as={'td'} sx={{position: 'sticky', left: "57px"}}>
      <Grid sx={{
        gridAutoFlow: "column",
        alignItems: "center",
        justifyContent: "start",

      }}>
        <Image src={'/company-icons/tata.png'} width={'40px'} height={'40px'} sx={{alignSelf: 'center'}}/>
        <Text sx={{
          color: "#222531FF",
          fontSize: "0.95rem",
          fontWeight: "600"
        }}>
          {children}
        </Text>
      </Grid>
    </Box>
  )
}

export const Table = () => {
  return <Box>
    <div role="region" aria-labelledby="caption" tabIndex="0">
      <table>
        <thead>
        <tr>
          <th></th>
          <th>#</th>
          <th>Company Name</th>
          <th>Market Cap</th>
          <th>Revenue</th>
          <th>PE ratio</th>
          <th>PB ratio</th>
        </tr>
        </thead>
        <tbody>
        {/*Example code without components*/}
        {/*<tr>*/}
        {/*  <th>Star</th>*/}
        {/*  <th>Number</th>*/}
        {/*  <th>Name</th>*/}
        {/*  <td>Hello</td>*/}
        {/*  <td>Hello</td>*/}
        {/*  <td>Hello</td>*/}
        {/*  <td>Hello</td>*/}
        {/*  <td>Hello</td>*/}
        {/*</tr>*/}

        {
          new Array(100).fill(1).map((value, index) => {
            return <tr key={index}>
              <StickyColStar>Star</StickyColStar>
              <StickyColNumber>6</StickyColNumber>
              <StickyColName>Name</StickyColName>
              <Box as={'td'} color={'#000000'}>$32,569.21</Box>
              <Box as={'td'} color={'#000000'}>$32,569.21</Box>
              <Box as={'td'} color={'green'}>15.5</Box>
              <Box as={'td'} color={'red'}>12</Box>
            </tr>;
          })
        }

        </tbody>
      </table>
    </div>
  </Box>;
}





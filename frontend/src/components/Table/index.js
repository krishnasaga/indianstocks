import React, { useState } from 'react';
import { Box, Grid, Image, Text, Button } from 'theme-ui';
import './index.css';
import { AiOutlineStar } from 'react-icons/ai';

function ToolTip ({ children, ...remainingProps }) {
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
        </Button >
        {isShown && (
            <Text sx={{
              clipPath: "polygon(0 0, 100% 0%, 100% 75%, 55% 75%, 50% 100%, 45% 75%, 0% 75%)",
              color: "white",
              background: "black",
              position: 'absolute',
              zIndex: "5",
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
      <Box as={'td'} sx={{position: 'sticky', left: "50px"}}>
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
      <Box as={'td'} sx={{position: 'sticky', left: "100px"}}>
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
          <th>Focus</th>
          <th>PE ratio</th>
          <th>PB ratio</th>
          <th>Market Cap</th>
          <th>Revenue</th>
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
        <tr>
          <StickyColStar>

          </StickyColStar>
          <StickyColNumber>1</StickyColNumber>
          <StickyColName>Name</StickyColName>
          <td><ToolTip></ToolTip></td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <StickyColStar>Star</StickyColStar>
          <StickyColNumber>2</StickyColNumber>
          <StickyColName>Name</StickyColName>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <StickyColStar>Star</StickyColStar>
          <StickyColNumber>3</StickyColNumber>
          <StickyColName>Name</StickyColName>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>

        <tr>
          <StickyColStar>Star</StickyColStar>
          <StickyColNumber>4</StickyColNumber>
          <StickyColName>Name</StickyColName>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <StickyColStar>Star</StickyColStar>
          <StickyColNumber>5</StickyColNumber>
          <StickyColName>Name</StickyColName>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <StickyColStar>Star</StickyColStar>
          <StickyColNumber>6</StickyColNumber>
          <StickyColName>Name</StickyColName>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <StickyColStar>Star</StickyColStar>
          <StickyColNumber>7</StickyColNumber>
          <StickyColName>Name</StickyColName>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <StickyColStar>Star</StickyColStar>
          <StickyColNumber>8</StickyColNumber>
          <StickyColName>Name</StickyColName>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <StickyColStar>Star</StickyColStar>
          <StickyColNumber>9</StickyColNumber>
          <StickyColName>Name</StickyColName>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <StickyColStar>Star</StickyColStar>
          <StickyColNumber>10</StickyColNumber>
          <StickyColName>Name</StickyColName>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <StickyColStar>Star</StickyColStar>
          <StickyColNumber>11</StickyColNumber>
          <StickyColName>Name</StickyColName>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <StickyColStar>Star</StickyColStar>
          <StickyColNumber>12</StickyColNumber>
          <StickyColName>Name</StickyColName>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <StickyColStar>Star</StickyColStar>
          <StickyColNumber>13</StickyColNumber>
          <StickyColName>Name</StickyColName>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <StickyColStar>Star</StickyColStar>
          <StickyColNumber>14</StickyColNumber>
          <StickyColName>Name</StickyColName>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <StickyColStar>Star</StickyColStar>
          <StickyColNumber>15</StickyColNumber>
          <StickyColName>Name</StickyColName>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <StickyColStar>Star</StickyColStar>
          <StickyColNumber>16</StickyColNumber>
          <StickyColName>Name</StickyColName>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <StickyColStar>Star</StickyColStar>
          <StickyColNumber>17</StickyColNumber>
          <StickyColName>Name</StickyColName>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <StickyColStar>Star</StickyColStar>
          <StickyColNumber>18</StickyColNumber>
          <StickyColName>Name</StickyColName>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <StickyColStar>Star</StickyColStar>
          <StickyColNumber>19</StickyColNumber>
          <StickyColName>Name</StickyColName>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <StickyColStar>Star</StickyColStar>
          <StickyColNumber>20</StickyColNumber>
          <StickyColName>Name</StickyColName>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <StickyColStar>Star</StickyColStar>
          <StickyColNumber>21</StickyColNumber>
          <StickyColName>Name</StickyColName>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <StickyColStar>Star</StickyColStar>
          <StickyColNumber>22</StickyColNumber>
          <StickyColName>Name</StickyColName>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        </tbody>
      </table>
    </div>
  </Box>;
}





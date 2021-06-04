import React from 'react';
import {Box, Grid, Image, Text} from 'theme-ui';
import './index.css';

const StickyColCell = ({children}) => {
  return (
    <Box as={'td'} sx={{position: 'sticky', left: 0}}>
      <Grid sx={{
        gridAutoFlow: "column",
      }}>
        <Image src={'/company-icons/tata.png'} width={'40px'} height={'40px'} sx={{alignSelf: 'center'}}/>
        <Text sx={{
          color: "red",
          fontSize: "1rem",
        }}>
          {children}
        </Text>
      </Grid>
    </Box>
  )
}

export const Table = () => {
  return <Box>
    Table

    <div role="region" aria-labelledby="caption" tabIndex="0">
      <table>
        <caption id="caption">Sticky table</caption>
        <thead>
        <tr>
          <th>Company Name</th>
          <th>Focus</th>
          <th>PE ratio</th>
          <th>PB ratio</th>
          <th>Market Cap</th>
          <th>Revenue</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <StickyColCell>Name</StickyColCell>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <StickyColCell>Name</StickyColCell>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
          <td>Hello</td>
        </tr>
        <tr>
          <th>Name</th>
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





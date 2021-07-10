import React from 'react';
import {Box, Text} from 'theme-ui';

export const More = () => {
  return <Box>
    <Box as={'ul'} p={0} sx={{
      listStyle: 'none',
      overflowX: 'scroll',
      whiteSpace: 'nowrap',
    }}>
      <Pill current={true}>
        Companies
      </Pill>
      <Pill>
        Stats
      </Pill>
      <Pill>
        Alerts
      </Pill>
      <Pill>
        Stories
      </Pill>
      <Pill>
        Knowledge
      </Pill>
    </Box>
  </Box>;
};

function Pill({children, current}) {
  return <Box as={'li'}
              px={[1,2]}
              py={1}
              mr={[1,2]}
              sx={{
                display: 'inline',
                cursor: 'pointer',
                borderRadius: '5px',
                "&:hover": {
                  filter: "brightness(40%)",
                }
              }}>
    <Text as={'span'} sx={{
      fontSize: '1rem',
      color: current ? 'blue' : 'grey',
    }}> {children} </Text>
  </Box>;
}
